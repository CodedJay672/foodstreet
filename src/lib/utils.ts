import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Models } from "node-appwrite";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getYear = (date: Date) => {
  return new Date(date).getFullYear();
};

export const range = (startYear: number, endYear: number) => {
  const years: number[] = [];
  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }
  return years;
};

export const generateUniqueCode = (length: number = 6) => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

export const agentReferralCode = () => {
  const code = generateUniqueCode();

  if (!code || code.length < 6) {
    return false;
  }

  return code;
};

export const generateReferralLink = async (code: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

  return `${baseUrl}/create-business?ref=${code}`;
};

export const getFilePreview = (file: Models.File) => {
  const imgUrl = `${process.env
    .NEXT_PUBLIC_APPWRITE_URL_ENDPOINT!}/storage/buckets/${
    file.bucketId
  }/files/${file?.$id}/preview?project=${[
    process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
  ]}`;

  return imgUrl;
};
