"use server";

import { cookies } from "next/headers";
import { createAdminClient, createSessionClient } from "../appwrite";
import { ID } from "node-appwrite";
import { authSchema } from "@/validation/schema";

const AuthFormSchema = authSchema("SIGN_UP");

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
  } catch (error: any) {
    throw new Error(error.message as string);
  }
};

export const SignUp = async (values: {
  email: string;
  password: string;
  name: string;
  occupation: string;
  dob: Date;
}) => {
  const { email, password, name, occupation, dob } = values;
  try {
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

    const session = await SignIn(values);

    // save the new user info to the Database
    await saveToDB({ name, email, occupation, dob });
    return session;
  } catch (error: any) {
    throw new Error(error.message as string);
  }
};

const saveToDB = async (values: {
  name: string;
  email: string;
  occupation: string;
  dob: Date;
}) => {
  const { database } = await createAdminClient();

  try {
    const newUser = await database.createDocument(
      process.env.APPWRITE_DATABASE_ID!,
      process.env.APPWRITE_USERS_COLLECTION_ID!,
      ID.unique(),
      values
    );

    if (!newUser) {
      throw new Error();
    }

    return newUser;
  } catch (error) {
    console.log(error);
  }
};

export const verifyUserEmail = async () => {
  try {
    const { account } = await createSessionClient();
    await account.createVerification("http://localhost:3000/verify-email");
  } catch (error: any) {
    throw new Error(error.message);
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
  } catch (error: any) {
    throw new Error(error.message);
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
