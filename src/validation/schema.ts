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
