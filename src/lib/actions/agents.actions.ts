"use server";

import { createAdminClient } from "../appwrite";
import { generateReferralLink, generateUniqueCode } from "../utils";
import { ID, Query } from "node-appwrite";

export const createAgent = async (userId: string) => {
  try {
    const { database } = await createAdminClient();

    const checkAgent = await getAgent(userId);

    if (checkAgent?.total > 0) {
      console.log("Agent created.");
      return checkAgent?.documents[0];
    }

    const code = generateUniqueCode(6);
    const referralLink = await generateReferralLink(code);

    const agent = await database.createDocument(
      process.env.APPWRITE_DATABASE_ID!,
      process.env.APPWRITE_AGENTS_COLLECTION_ID!,
      ID.unique(),
      {
        details: userId,
        refCode: code,
        refLink: referralLink,
      }
    );

    if (!agent) {
      throw new Error("Failed to create referral code");
    }

    return agent;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getAgent = async (userId: string) => {
  try {
    const { database } = await createAdminClient();

    const agent = await database.listDocuments(
      process.env.APPWRITE_DATABASE_ID!,
      process.env.APPWRITE_AGENTS_COLLECTION_ID!,
      [Query.equal("details", userId)]
    );

    if (!agent) {
      throw new Error("You are not an agent yet");
    }

    return agent;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
