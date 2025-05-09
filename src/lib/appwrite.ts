"use server";

import {
  Client,
  Account,
  Databases,
  Users,
  Storage,
  Avatars,
} from "node-appwrite";
import { cookies } from "next/headers";

export async function createSessionClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_URL_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

  const session = (await cookies()).get("foodstreet-session");

  //check if session already exists
  if (!session || !session.value) {
    throw new Error("No session. Please login");
  }

  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },

    get avatar() {
      return new Avatars(client);
    },
  };
}

export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_URL_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
    .setKey(process.env.APPPWRITE_SECRET!);

  return {
    get account() {
      return new Account(client);
    },
    get database() {
      return new Databases(client);
    },
    get user() {
      return new Users(client);
    },
    get storage() {
      return new Storage(client);
    },
  };
}
