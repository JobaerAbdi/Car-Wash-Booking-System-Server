import mongoose from "mongoose";
import { Service } from "../Service/service.model";
import { Slot } from "../Slot/slot.model";
import { CBooking } from "./booking.interface";
import { Booking } from "./booking.model";
import AppError from "../../Error/AppError";
import httpStatus from "http-status";

const createBooking = async (bookingData: CBooking) => {
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

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // Verify service existence
    const service = await Service.findById(serviceId).session(session);
    if (!service) {
      throw new AppError(httpStatus.NOT_FOUND, "Service not found !");
    }

    // Verify slot availability
    const slot = await Slot.findById(slotId).session(session);
    if (!slot || slot.isBooked !== "available") {
      throw new AppError(httpStatus.BAD_REQUEST, "Slot not available !");
    }

    // Create booking
    const booking = new Booking({
      customer: customerId,
      service: serviceId,
      slot: slot,
      vehicleType,
      vehicleBrand,
      vehicleModel,
      manufacturingYear,
      registrationPlate,
    });

    const savedBooking = await booking.save({ session });

    // Update slot status
    slot.isBooked = "booked";
    await slot.save({ session });

    await session.commitTransaction();
    session.endSession();

    // Populate booking with relevant data
    await (
      await (await savedBooking.populate("customer")).populate("service")
    ).populate("slot");

    return savedBooking;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};

export const BookingServices = {
  createBooking,
};
