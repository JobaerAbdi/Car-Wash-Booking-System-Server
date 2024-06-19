import { Schema, model } from "mongoose";
import { CSlot } from "./slot.interface";

export const slotSchema = new Schema<CSlot>(
  {
    service: {
      type: Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },

    date: {
      type: String,
      required: true,
    },

    startTime: {
      type: String,
      required: true,
    },

    endTime: {
      type: String,
      required: true,
    },
    isBooked: {
      type: String,
      enum: ["available", "booked", "canceled"],
      default: "available",
    },
  },
  { timestamps: true }
);

export const Slot = model<CSlot>("Slot", slotSchema);
