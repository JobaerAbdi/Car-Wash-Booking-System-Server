import { z } from "zod";

const SlotValidationSchema = z.object({
  service: z.string().regex(/^[0-9a-fA-F]{24}$/),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  startTime: z.string().regex(/^\d{2}:\d{2}$/),
  endTime: z.string().regex(/^\d{2}:\d{2}$/, { message: "must be end time !" }),
});

export const SlotValidation = {
  SlotValidationSchema,
};
