import { z } from "zod";

export const createUserValidationSchema = z.object({
  body:z.object({
    name: z.string(),
    email: z.string().email({ message: "Email is invalid" }),
    password: z.string(),
    phone: z.string(),
    role: z.enum(["admin", "user"]),
    address: z.string(),
  })
});

export const UserValidation = {
  createUserValidationSchema,
};
