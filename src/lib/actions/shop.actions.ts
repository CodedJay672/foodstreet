"use server";

import { AppwriteException, ID, Query } from "node-appwrite";
import { createAdminClient } from "../appwrite";
import { InputFile } from "node-appwrite/file";

export const getShopsById = async (id: string) => {
  try {
    //initialize the database
    const { database } = await createAdminClient();

    const shops = await database.listDocuments(
      process.env.APPWRITE_DATABASE_ID!,
      process.env.APPWRITE_SHOPS_COLLECTION_ID!,
      [Query.equal("$id", id)]
    );

    if (!shops) {
      throw new Error("Failed to fetch shops.");
    }

    return shops;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getShops = async (query?: string) => {
  try {
    //initialize the database
    const { database } = await createAdminClient();

    const shops = await database.listDocuments(
      process.env.APPWRITE_DATABASE_ID!,
      process.env.APPWRITE_SHOPS_COLLECTION_ID!,
      query ? [Query.equal("name", query)] : []
    );

    if (!shops) {
      throw new Error("Failed to fetch shops.");
    }

    return shops;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createShop = async (values: ShopType) => {
  try {
    const { database } = await createAdminClient();

    const response = await database.createDocument(
      process.env.APPWRITE_DATABASE_ID!,
      process.env.APPWRITE_SHOPS_COLLECTION_ID!,
      ID.unique(),
      {
        ...values,
      }
    );

    if (!response) {
      throw new Error("Shop creation failed.");
    }

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const uploadShopImage = async (file: File) => {
  try {
    if (!file) {
      throw new Error("No file provided.");
    }

    const { storage } = await createAdminClient();

    // upload the file to appwrite storage
    const res = await storage.createFile(
      process.env.APPWRITE_STORAGE_ID!,
      ID.unique(),
      InputFile.fromBuffer(file, file.name)
    );

    if (!res) {
      throw new Error("Something went wrong");
    }

    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateProfileImage = async (id: string, file: File) => {
  try {
    const { database } = await createAdminClient();

    //upload the file to appwrite storage
    const res = await uploadShopImage(file);

    if (!res) {
      throw new Error();
    }

    //get the image url from the response
    const imgUrl = `${process.env
      .NEXT_PUBLIC_APPWRITE_URL_ENDPOINT!}/storage/buckets/${
      res.bucketId
    }/files/${res?.$id}/preview?project=${[
      process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
    ]}`;

    // update the shop document with the image url
    const result = await database.updateDocument(
      process.env.APPWRITE_DATABASE_ID!,
      process.env.APPWRITE_SHOPS_COLLECTION_ID!,
      id,
      {
        imageUrl: imgUrl,
      }
    );

    if (!result) {
      throw new Error("Failed to update shop image.");
    }
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateBannerImage = async (id: string, file: File) => {
  try {
    const { database } = await createAdminClient();

    //upload the file to appwrite storage
    const res = await uploadShopImage(file);

    if (!res) {
      throw new Error();
    }

    //get the image url from the response
    const imgUrl = `${process.env
      .NEXT_PUBLIC_APPWRITE_URL_ENDPOINT!}/storage/buckets/${
      res.bucketId
    }/files/${res?.$id}/preview?project=${[
      process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
    ]}`;

    // update the shop document with the image url
    const result = await database.updateDocument(
      process.env.APPWRITE_DATABASE_ID!,
      process.env.APPWRITE_SHOPS_COLLECTION_ID!,
      id,
      {
        bannerUrl: imgUrl,
      }
    );

    if (!result) {
      throw new Error("Failed to update shop image.");
    }
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
