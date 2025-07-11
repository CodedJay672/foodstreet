import { Query } from "node-appwrite";
import "server-only";
import { createAdminClient } from "../appwrite";

export const getAllProducts = async (shopId?: string, query?: string) => {
  try {
    const { database } = await createAdminClient();

    if (shopId) {
      const response = await database.listDocuments(
        process.env.APPWRITE_DATABASE_ID!,
        process.env.APPWRITE_PRODUCTS_COLLECTION_ID!,
        [Query.equal("shops", shopId), Query.search("name", query || "")]
      );

      if (!response) throw new Error("Cannot fetch products");

      return response;
    }

    const response = await database.listDocuments(
      process.env.APPWRITE_DATABASE_ID!,
      process.env.APPWRITE_PRODUCTS_COLLECTION_ID!,
      [Query.search("name", query || "")]
    );

    if (!response) throw new Error("Fetch failed.");

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
