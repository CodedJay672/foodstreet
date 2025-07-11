"use server";

import { createAdminClient } from "../appwrite";
import { ID } from "node-appwrite";
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
        initPrice: data.initPrice,
        discPrice: data.discPrice,
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
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const uploadFile = async (file: File) => {
  try {
    const { storage } = await createAdminClient();

    if (!file.name) return;

    const response = await storage.createFile(
      process.env.APPWRITE_STORAGE_ID!,
      ID.unique(),
      InputFile.fromBuffer(file, file.name)
    );

    if (!response) {
      throw new Error("Something went wrong");
    }

    revalidatePath("/my-shop");
    revalidatePath("/foodstuffs");
    return response;
  } catch (error) {
    console.log(error);
    throw error;
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
  } catch (error) {
    console.log(error);
    throw error;
  }
};
