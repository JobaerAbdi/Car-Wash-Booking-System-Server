import { z } from "zod";
import { CVehicleType } from "./booking.interface";

const createBookingValidationSchema = z.object({
  body: z.object({
    serviceId: z.string(),
    slotId: z.string(),
    vehicleType: z.nativeEnum(CVehicleType),
    vehicleBrand: z.string(),
    vehicleModel: z.string(),
    manufacturingYear: z.number(),
    registrationPlate: z.string(),
  }),
});

export const BookingValidation = {
  createBookingValidationSchema,
};
