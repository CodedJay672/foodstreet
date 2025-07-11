import "server-only";

import { createAdminClient, createSessionClient } from "../appwrite";
import { Query } from "node-appwrite";
import { cache } from "react";
import { redirect } from "next/navigation";

export const getLoggedInUser = cache(async () => {
  try {
    const session = await createSessionClient();

    if (!session?.account) return null;

    return await session?.account.get();
  } catch (error) {
    throw error;
  }
});

export const getCurrentUser = cache(async (userId?: string) => {
  try {
    // get logged in user
    const user = await getLoggedInUser();
    if (!user) return null;

    const { database } = await createAdminClient();

    const currentUser = await database.listDocuments(
      process.env.APPWRITE_DATABASE_ID!,
      process.env.APPWRITE_USERS_COLLECTION_ID!,
      userId
        ? [Query.equal("$id", userId)]
        : [Query.equal("accountId", user?.$id)]
    );

    if (!currentUser) {
      return null;
    }

    return currentUser.documents[0];
  } catch (error) {
    throw error;
  }
});
