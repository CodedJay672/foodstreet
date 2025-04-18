"use server";

import { cookies } from "next/headers";
import { createAdminClient, createSessionClient } from "../appwrite";
import { ID, Models, Query } from "node-appwrite";
import { deleteFile, uploadFile } from "./product.actions";
import { getFilePreview } from "../utils";
import { getAgentByRefCode } from "./agents.actions";

export const SignIn = async (values: { email: string; password: string }) => {
  try {
    const { account } = await createAdminClient();

    const session = await account.createEmailPasswordSession(
      values.email,
      values.password
    );

    if (!session) {
      throw new Error("Sign in failed.");
    }

    (await cookies()).set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return session;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const SignUp = async (values: {
  email: string;
  password: string;
  name: string;
  occupation: string;
  dob: Date;
  referrer?: string;
}) => {
  try {
    const { email, password, name, occupation, dob, referrer } = values;

    const { account } = await createAdminClient();
    let agent: Models.Document | null = null;

    const newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      name
    );

    if (!newUserAccount) {
      throw new Error("User already exists. Please login to continue");
    }

    // get the referrer if available
    if (referrer) {
      agent = await getAgentByRefCode(referrer);
    }

    // save the new user info to the Database
    await saveToDB({
      name,
      email,
      occupation,
      dob,
      agent: agent?.$id,
      accountId: newUserAccount?.$id,
    });

    // sign user in and return the session
    const session = await SignIn(values);
    return session;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const saveToDB = async (values: {
  name: string;
  email: string;
  occupation: string;
  dob: Date;
  agent?: string;
  accountId?: string;
}) => {
  const { database } = await createAdminClient();

  try {
    const newUser = await database.createDocument(
      process.env.APPWRITE_DATABASE_ID!,
      process.env.APPWRITE_USERS_COLLECTION_ID!,
      ID.unique(),
      { ...values }
    );

    if (!newUser) {
      throw new Error();
    }

    return newUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const verifyUserEmail = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
  try {
    const { account } = await createSessionClient();

    await account.createVerification(`${baseUrl}/verify-email`);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const userEmailVerified = async (userId: string, secret: string) => {
  try {
    const { account } = await createSessionClient();

    // verify user from Appwrite
    const response = await account.updateVerification(userId, secret);

    if (!response) {
      throw new Error("User verification failed.");
    }

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const signOut = async () => {
  const { account } = await createSessionClient();

  (await cookies()).delete("appwrite-session");
  await account.deleteSession("current");
};

export const getLoggedInUser = async () => {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error) {
    return null;
  }
};

export const getCurrentUser = async (userId?: string) => {
  try {
    const signedInUser = await getLoggedInUser();
    const { database } = await createAdminClient();

    if (!signedInUser) {
      throw new Error("No session found");
    }

    const currentUser = await database.listDocuments(
      process.env.APPWRITE_DATABASE_ID!,
      process.env.APPWRITE_USERS_COLLECTION_ID!,
      userId
        ? [Query.equal("$id", userId)]
        : [Query.equal("accountId", signedInUser.$id)]
    );

    if (!currentUser) {
      throw Error;
    }

    return currentUser.documents[0];
  } catch (error) {
    return null;
  }
};

export const updateUserInfo = async (
  id: string,
  file: File,
  data: FormData
) => {
  try {
    const firstName = data.get("firstName");
    const lastName = data.get("lastName");
    const email = data.get("email");
    const state = data.get("state");
    const deliveryArea = data.get("deliveryArea");
    const streetAddress = data.get("streetAddress");
    const phone = data.get("phone");

    const { database } = await createAdminClient();

    //first upload the image and get the imageUrl
    const uploadImg = await uploadFile(file);

    if (!uploadImg) {
      throw new Error();
    }

    //get image preview url
    const imgUrl = getFilePreview(uploadImg);

    if (!imgUrl) {
      await deleteFile(uploadImg.$id);
      throw new Error("Image upload failed.");
    }

    // update the user information with the new data
    const response = await database.updateDocument(
      process.env.APPWRITE_DATABASE_ID!,
      process.env.APPWRITE_USERS_COLLECTION_ID!,
      id,
      {
        name: `${firstName} ${lastName}`,
        email,
        state,
        deliveryArea,
        streetAddress,
        phone,
        imageUrl: imgUrl,
      }
    );

    if (!response) {
      throw new Error();
    }

    return response;
  } catch (error) {
    throw error;
  }
};

export const recoverPassword = async (email: string) => {
  try {
    const { account } = await createAdminClient();
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

    const response = await account.createRecovery(email, `${baseUrl}/recovery`);

    if (!response) {
      throw new Error("Email not found");
    }

    return response;
  } catch (error) {
    throw error;
  }
};

export const setNewPassword = async (
  userId: string,
  secret: string,
  password: string
) => {
  try {
    const { account } = await createAdminClient();

    const response = await account.updateRecovery(userId, secret, password);

    if (!response) {
      throw new Error("Password update failed.");
    }

    return response;
  } catch (error) {
    throw error;
  }
};
