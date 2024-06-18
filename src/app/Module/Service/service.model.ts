import { Schema, model } from "mongoose";
import { CService } from "./service.interface";

export const serviceSchema = new Schema<CService>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Service = model<CService>("Service", serviceSchema);
