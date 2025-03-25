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
    email: z.string().email(),
    password: z.string(),
  });

export const shopSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  location: z.string(),
  description: z.string(),
  age: z.number(),
  phone: z.string(),
  occupation: z.string(),
  workAddress: z.string(),
  imageUrl: z.string(),
  bannerUrl: z.string(),
});
