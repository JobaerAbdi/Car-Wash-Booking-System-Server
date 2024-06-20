import { z } from "zod";
import { USER_Role } from "./user.consatand";

export const createUserValidationSchema = z.object({
  body:z.object({
    name: z.string(),
    email: z.string().email({ message: "Email is invalid" }),
    password: z.string(),
    phone: z.string(),
    role: z.nativeEnum(USER_Role).optional(),
    address: z.string(),
  })
});

export const UserValidation = {
  createUserValidationSchema,
};
