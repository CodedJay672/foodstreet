import { string, z } from "zod";

export const authSchema = (type: string) =>
  z.object({
    fullname: type === "SIGN_IN" ? z.string().optional() : z.string(),
    dob: type === "SIGN_IN" ? z.string().date().optional() : z.string().date(),
    occupation: type === "SIGN_IN" ? z.string().optional() : z.string(),
    email: z.string().email(),
    password: z.string(),
  });

export const shopSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  location: z.string(),
  description: z.string(),
  phone: z.string(),
  occupation: z.string(),
  "work-address": z.string(),
  imageUrl: z.string().optional(),
  bannerUrl: z.string().optional(),
});

export const productSchema = z.object({
  name: z.string(),
  measure: z.string(),
  initPrice: z.coerce.number(),
  discPrice: z.coerce.number(),
  description: z.string(),
});
