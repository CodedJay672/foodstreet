"use server";

import { cache } from "react";
import { createAdminClient } from "../appwrite";
import { ID, Query } from "node-appwrite";

export const createProduct = cache(async (data: ProductType) => {
  try {
    const { database } = await createAdminClient();

    const response = await database.createDocument(
      process.env.APPWRITE_DATABASE_ID!,
      process.env.APPWRITE_PRODUCTS_COLLECTION_ID!,
      ID.unique(),
      data
    );

    if (!response) {
      throw new Error("upload Failed");
    }

    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
});

export const getAllProducts = async (shopId?: string) => {
  try {
    const { database } = await createAdminClient();

    if (shopId) {
      const response = await database.listDocuments(
        process.env.APPWRITE_DATABASE_ID!,
        process.env.APPWRITE_PRODUCTS_COLLECTION_ID!,
        [Query.equal("shops", shopId)]
      );

      if (!response) throw new Error("Cannot fetch products");

      return response;
    }

    const response = await database.listDocuments(
      process.env.APPWRITE_DATABASE_ID!,
      process.env.APPWRITE_PRODUCTS_COLLECTION_ID!
    );

    if (!response) throw new Error("Fetch failed.");

    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
