import { Schema, model } from "mongoose";
import { CReviw } from "./reviw.interface";

export const CReviwSchema = new Schema<CReviw>(
  {
    feedback: { type: String, required: true },
    rating: { type: String, required: true },
  },
  { timestamps: true }
);

export const Reviw = model<CReviw>("Reviw", CReviwSchema);
