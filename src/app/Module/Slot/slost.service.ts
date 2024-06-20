import { calculateTimeSlots } from "../../utils/time";
import { Service } from "../Service/service.model";
import { Slot } from "./slot.model";


const createSlot = async (serviceId: string, date: string, startTime: string, endTime: string) => {
  
  const serviceData = await Service.findById(serviceId);
  if (!serviceData) {
    throw new Error('Service not found');
  }

  const duration = serviceData.duration;
  const slots = calculateTimeSlots(startTime, endTime, duration).map(slot => ({
    ...slot,
    service: serviceId,
    date,
    isBooked: "available"
  }));

  const createdSlots = await Slot.insertMany(slots);
  return createdSlots;
};

export const SlotService = {
  createSlot,
};
