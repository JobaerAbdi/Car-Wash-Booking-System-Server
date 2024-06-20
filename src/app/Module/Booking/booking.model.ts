import { Schema, model } from "mongoose";
import { CBooking, CVehicleType } from "./booking.interface";

export const CBookingSchema = new Schema<CBooking>(
  {
    customerId: { type: Schema.Types.ObjectId, ref: "User",  },
    serviceId: { type: Schema.Types.ObjectId, ref: "Service",  },
    slotId: { type: Schema.Types.ObjectId, ref: "Slot",  },
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
