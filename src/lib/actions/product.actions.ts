"use server";

import { cache } from "react";
import { createAdminClient } from "../appwrite";
import { ID } from "node-appwrite";

export const createProduct = cache(async (data: ProductType) => {
  try {
    const { database } = await createAdminClient();

    const response = await database.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!,
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
