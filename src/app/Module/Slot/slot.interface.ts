import { ObjectId } from "mongodb";

export interface CSlot {
    service: ObjectId;
    date: string;
    startTime: string;
    endTime: string;
    isBooked: string;
  }

