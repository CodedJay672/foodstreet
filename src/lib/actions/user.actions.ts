"use server";

import { cookies } from "next/headers";
import { createAdminClient, createSessionClient } from "../appwrite";
import { ID } from "node-appwrite";
import { authSchema } from "@/validation/schema";

const AuthFormSchema = authSchema("SIGN_UP");

// export const SignIn = async (email: string, password: string) => {
//   const session = await createEmailPasswordSession(email, password);

//   (await cookies()).set("my-custom-session", session.secret, {
//     path: "/",
//     httpOnly: true,
//     sameSite: "strict",
//     secure: true,
//   });
// }

export const SignUp = async (values: {
  email: string;
  password: string;
  fullname?: string;
}) => {
  const { email, password, fullname: name } = values;
  try {
    const parsedData = AuthFormSchema.safeParse(values);

    if (parsedData.error) {
      return parsedData.error.errors[0].message;
    }

    const { account } = await createAdminClient();

    const newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      name
    );

    if (!newUserAccount) {
      throw new Error("User already exists. Please login to continue");
    }

    const session = await account.createEmailPasswordSession(email, password);

    (await cookies()).set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    // const newUser = await saveToDB({name, email});
    return session;
  } catch (error) {
    throw new Error(error as string);
  }
};

const saveToDB = async (values: { name: string; email: string }) => {
  const { database } = await createAdminClient();

  try {
    const newUser = await database.createDocument(
      process.env.APPWRITE_DATABASE_ID!,
      process.env.APPWRITE_USERS_COLLECTION_ID!,
      ID.unique(),
      values
    );
  } catch (error) {
    console.log(error);
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
