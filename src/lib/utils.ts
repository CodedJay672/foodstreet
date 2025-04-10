import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getYear = (date: Date) => {
  return new Date(date).getFullYear();
};

export function range(startYear: number, endYear: number): number[] {
  const years: number[] = [];
  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }
  return years;
}

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
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  return `${baseUrl}/join?ref=${code}`;
};
