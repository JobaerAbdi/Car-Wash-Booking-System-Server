import { Schema, model } from "mongoose";
import { CBooking, CVehicleType } from "./booking.interface";

export const CBookingSchema = new Schema<CBooking>(
  {
    customer: { type: Schema.Types.ObjectId, ref: "User",  },
    service: { type: Schema.Types.ObjectId, ref: "Service",  },
    slot: { type: Schema.Types.ObjectId, ref: "Slot",  },
    vehicleType: {
      type: String,
      enum: Object.values(CVehicleType),
      required: true,
    },
    vehicleBrand: { type: String, required: true },
    vehicleModel: { type: String, required: true },
    status: {
      type: String,
      enum: ["complete", "pending", "cancel"],
      default: "pending",
    },
    manufacturingYear: { type: Number, required: true },
    registrationPlate: { type: String, required: true },
  },
  { timestamps: true }
);

export const Booking = model<CBooking>("Booking", CBookingSchema);
