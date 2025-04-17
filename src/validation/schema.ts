import { z } from "zod";

export const authSchema = (type: string) =>
  z.object({
    fullname: type === "SIGN_IN" ? z.string().optional() : z.string(),
    dob:
      type === "SIGN_IN"
        ? z.coerce
            .date({
              required_error: "Date of birth is required",
            })
            .optional()
        : z.coerce.date({
            required_error: "Date of birth is required",
          }),
    occupation: type === "SIGN_IN" ? z.string().optional() : z.string(),
    referrer: z
      .string()
      .max(8, {
        message: "Referrer code must be 8 characters long",
      })
      .optional(),
    email: z.string().email(),
    password: z.string().min(8, {
      message: "Password should be at least 8 characters long.",
    }),
  });

export const profileSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  email: z.string().email(),
  phone: z.string(),
  state: z.string(),
  deliveryArea: z.string(),
  streetAddress: z.string(),
});

export const shopSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  location: z.string(),
  description: z.string(),
  phone: z.string(),
  occupation: z.string(),
  "work-address": z.string(),
});

export const productSchema = z.object({
  name: z.string(),
  measure: z.string(),
  initPrice: z.coerce.number(),
  discPrice: z.coerce.number(),
  description: z.string(),
  image: z.custom<File[]>(),
});
