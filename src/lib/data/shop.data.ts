import "server-only";

import { createAdminClient } from "../appwrite";
import { Query } from "node-appwrite";
import { getLoggedInUser } from "./user.data";
import { redirect } from "next/navigation";

export const getShopsById = async (id: string) => {
  try {
    //verify logged in user
    const user = await getLoggedInUser();
    if (!user) {
      redirect("/sign-in");
    }

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
