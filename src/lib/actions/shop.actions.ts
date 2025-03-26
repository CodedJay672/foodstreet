"use server";

import { ID, Query } from "node-appwrite";
import { createAdminClient } from "../appwrite";
import { cache } from "react";
import { ShopType } from "@/types";

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

export const createShop = async (values: ShopType) => {
  try {
    const { database } = await createAdminClient();

    const response = await database.createDocument(
      process.env.APPWRITE_DATABASE_ID!,
      process.env.APPWRITE_SHOPS_COLLECTION_ID!,
      ID.unique(),
      values
    );

    if (!response) {
      throw new Error("Shop creation failed.");
    }

    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
