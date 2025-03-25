"use server";

import { Query } from "node-appwrite";
import { createAdminClient } from "../appwrite";
import { cache } from "react";

export const getShops = cache(async (creator: string | undefined) => {
  try {
    //initialize the database
    const { database } = await createAdminClient();

    if (creator) {
      const shops = await database.listDocuments(
        process.env.APPWRITE_DATABASE_ID!,
        process.env.APPWRITE_SHOPS_COLLECTION_ID!,
        [Query.equal("creator", creator)]
      );

      if (!shops) {
        throw new Error("No shops found.");
      }

      return shops;
    }

    const shops = await database.listDocuments(
      process.env.APPWRITE_DATABASE_ID!,
      process.env.APPWRITE_SHOPS_COLLECTION_ID!
    );

    if (!shops) {
      throw new Error("Failed to fetch shops.");
    }

    return shops;
  } catch (error) {
    throw new Error("Error: Fetch failed.");
  }
});
