import { calculateTimeSlots } from "../../utils/time";
import { Service } from "../Service/service.model";
import { CSlot } from "./slot.interface";
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
  const result = await Slot.insertMany(slots);
  return result;
};


//get available slots
const getAvailableSlots = async (date?: string, serviceId?: string) => {
  const query: any = {
    isBooked: 'available'
  };
  if (date) {
    query.date = date;
  }
  if (serviceId) {
    query.service = serviceId;
  }
  const slots = await Slot.find(query).populate('service');
  return slots;
};

// Service function to get available slots by service ID
const getAvailableSlotsByServiceId = async (serviceId?: string) => {
  // Query the database for slots associated with the given service ID
  const slots = await Slot.find({ service: serviceId, isBooked: "available" }).populate('service');
  return slots;
};


//get all slots
const getAllSlots = async () => {
  const slots = await Slot.find().populate('service');
  return slots;
};

//update service
const updateSlot = async (id: string, updateData: Partial<CSlot>) => {
  const result = await Slot.findByIdAndUpdate(id, updateData, {new:true, runValidators: true}).exec();
  return result;
};

export const SlotService = {
  createSlot,
  getAvailableSlots,
  updateSlot,
  getAllSlots,
  getAvailableSlotsByServiceId
};
