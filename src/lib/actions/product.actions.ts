"use server";

import { cache } from "react";
import { createAdminClient } from "../appwrite";
import { ID, Query } from "node-appwrite";
import { InputFile } from "node-appwrite/file";
import { revalidatePath } from "next/cache";

export const createProduct = async (data: ProductType) => {
  try {
    const { database } = await createAdminClient();

    //first we upload the file
    const uploadedFile = await uploadFile(data.image[0]);

    if (!uploadedFile) {
      throw new Error("Failed to upload image");
    }

    const response = await database.createDocument(
      process.env.APPWRITE_DATABASE_ID!,
      process.env.APPWRITE_PRODUCTS_COLLECTION_ID!,
      ID.unique(),
      {
        name: data.name,
        shop: data.shop,
        measure: data.measure,
        initPrice: data.initPrice,
        discPrice: data.discPrice,
        description: data.description,
        imageUrl: `${process.env
          .NEXT_PUBLIC_APPWRITE_URL_ENDPOINT!}/storage/buckets/${
          uploadedFile.bucketId
        }/files/${uploadedFile?.$id}/preview?project=${[
          process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
        ]}`,
      }
    );

    if (!response) {
      throw new Error("upload Failed");
    }

    revalidatePath("/foodstuffs");
    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const uploadFile = async (file: File) => {
  try {
    const { storage } = await createAdminClient();

    const response = await storage.createFile(
      process.env.APPWRITE_STORAGE_ID!,
      ID.unique(),
      InputFile.fromBuffer(file, file.name)
    );

    if (!response) {
      throw new Error("Something went wrong");
    }

    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const deleteFile = async (fileId: string) => {
  try {
    const { storage } = await createAdminClient();

    const response = await storage.deleteFile(
      process.env.APPWRITE_STORAGE_ID!,
      fileId
    );

    if (!response) {
      throw new Error("Something went wrong");
    }

    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getAllProducts = cache(async (shopId?: string) => {
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
});
