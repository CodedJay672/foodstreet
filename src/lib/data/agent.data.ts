import "server-only";
import { createAdminClient } from "../appwrite";
import { Query } from "node-appwrite";

export const getAgent = async (userId?: string) => {
  try {
    const { database } = await createAdminClient();

    const agent = await database.listDocuments(
      process.env.APPWRITE_DATABASE_ID!,
      process.env.APPWRITE_AGENTS_COLLECTION_ID!,
      [Query.equal("details", userId ?? "")]
    );

    if (!agent) {
      throw new Error("You are not an agent yet");
    }

    return agent;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getAgentByRefCode = async (refCode: string) => {
  try {
    const { database } = await createAdminClient();

    const agent = await database.listDocuments(
      process.env.APPWRITE_DATABASE_ID!,
      process.env.APPWRITE_AGENTS_COLLECTION_ID!,
      [Query.equal("refCode", refCode)]
    );

    if (!agent) {
      throw new Error("You are not an agent yet");
    }

    return agent.documents[0];
  } catch (error) {
    console.log(error);
    throw error;
  }
};
