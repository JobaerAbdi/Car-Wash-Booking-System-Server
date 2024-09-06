import { z } from "zod";

export const createReviwValidationSchema = z.object({
  body:z.object({
    feedback: z.string(),
    rating: z.number()
  })
});

export const ReviwValidation = {
    createReviwValidationSchema,
};
