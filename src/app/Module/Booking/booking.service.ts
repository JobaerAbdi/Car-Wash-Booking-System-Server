
import { Service } from "../Service/service.model";
import { Slot } from "../Slot/slot.model";
import { Booking } from "./booking.model";
import AppError from "../../Error/AppError";
import httpStatus from "http-status";


const createBooking = async (bookingData: any) => {
  const {
    customerId,
    serviceId,
    slotId,
    vehicleType,
    vehicleBrand,
    vehicleModel,
    manufacturingYear,
    registrationPlate,
  } = bookingData;

  // Verify service existence
  const service = await Service.findById(serviceId);
  if (!service) {
    throw new AppError(httpStatus.NOT_FOUND, "Service not found!");
  }

  // Verify slot availability
  const slot = await Slot.findById(slotId);
  if (!slot || slot.isBooked !== "available") {
    throw new AppError(httpStatus.BAD_REQUEST, "Slot not available!");
  }

  // Create booking
  const booking = new Booking({
    customer: customerId,
    service: serviceId,
    slot: slotId,
    vehicleType,
    vehicleBrand,
    vehicleModel,
    manufacturingYear,
    registrationPlate,
  });

  const savedBooking = await booking.save();

  // Update slot status
  slot.isBooked = "booked";
  await slot.save();

  // Populate booking with relevant data
  await savedBooking.populate('customer');

  return savedBooking;
};


export const BookingServices = {
  createBooking,
};
