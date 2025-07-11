"use server";

import { redirect } from "next/navigation";
import { createAdminClient } from "../appwrite";
import { getAgent } from "../data/agent.data";
import { getLoggedInUser } from "../data/user.data";
import { generateReferralLink, generateUniqueCode } from "../utils";
import { ID } from "node-appwrite";

export const createAgent = async (userId: string) => {
  try {
    // validate logged in user
    const user = await getLoggedInUser();
    if (!user) redirect("/sign-in");

    const { database } = await createAdminClient();
    const checkAgent = await getAgent(userId);

    if (checkAgent?.total > 0) {
      console.log("Agent created.");
      return checkAgent?.documents[0];
    }

    const code = generateUniqueCode(6);
    const referralLink = await generateReferralLink(code);

    // get all agents from the database
    const allAgents = await getAgent();

    const agent = await database.createDocument(
      process.env.APPWRITE_DATABASE_ID!,
      process.env.APPWRITE_AGENTS_COLLECTION_ID!,
      ID.unique(),
      {
        details: userId,
        agentNumber: allAgents?.total + 1,
        refCode: code,
        refLink: referralLink,
      }
    );

    if (!agent) {
      throw new Error("Failed to create referral code");
    }

    return agent;
  } catch (error) {
    throw error;
  }
};
