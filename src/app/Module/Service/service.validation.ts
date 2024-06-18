import { z } from "zod";

export const createServiceValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    description: z.string(),
    price: z.number().positive({ message: "Price must be a positive number" }),
    duration: z
      .number()
      .positive({ message: "Duration must be a positive number" }),
    isDeleted: z.boolean().default(false),
  }),
});

export const ServiceValidation = {
  createServiceValidationSchema,
};
