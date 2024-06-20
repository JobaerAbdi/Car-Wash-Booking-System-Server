import { Schema, model } from "mongoose";
import { CBooking, CVehicleType } from "./booking.interface";

export const CBookingSchema = new Schema<CBooking>(
  {
    customerId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    serviceId: { type: Schema.Types.ObjectId, ref: "Service", required: true },
    slotId: { type: Schema.Types.ObjectId, ref: "Slot", required: true },
    vehicleType: {
      type: String,
      enum: Object.values(CVehicleType),
      required: true,
    },
    vehicleBrand: { type: String, required: true },
    vehicleModel: { type: String, required: true },
    manufacturingYear: { type: Number, required: true },
    registrationPlate: { type: String, required: true },
  },
  { timestamps: true }
);

export const Booking = model<CBooking>("Booking", CBookingSchema);
