import { z } from "zod";

export const authSchema = (type: string) =>
  z.object({
    fullname:
      type === "SIGN_IN"
        ? z
            .string()
            .min(2, {
              message: "fullname must be at least 2 characters.",
            })
            .optional()
        : z.string().min(2, {
            message: "fullname must be at least 2 characters.",
          }),
    age:
      type === "SIGN_IN"
        ? z
            .number()
            .min(18, {
              message: "must be at least 18 years.",
            })
            .optional()
        : z.string().min(2, {
            message: "must be at least 18 years",
          }),
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
