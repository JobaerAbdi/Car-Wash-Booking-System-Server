import { Service } from "../Service/service.model";
import { Slot } from "../Slot/slot.model";
import { Booking } from "./booking.model";
import AppError from "../../Error/AppError";
import httpStatus from "http-status";
import { User } from "../User/user.model";

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

  const customer = await User.findById(customerId);
  if (!customer) {
    throw new AppError(httpStatus.NOT_FOUND, "User Is Found");
  }

  // Verify service existence
  const service = await Service.findById(serviceId);
  if (!service) {
    throw new AppError(httpStatus.NOT_FOUND, "Service not found!");
  }

  if (service.isDeleted) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Service is deleted. Booking cannot be made."
    );
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
  await savedBooking.populate("customer");
  await savedBooking.populate("service");
  await savedBooking.populate("slot");

  return savedBooking;
};

//get all Booking
const getallBooing = async () => {
  const result = await Booking.find()
    .populate("customer")
    .populate("service")
    .populate("slot");
  return result;
};

const getUserBookings = async (userId: string) => {
  const query: any = {
    customer: userId,
    status: "complete",
  };

  const bookings = await Booking.find(query)
    .select("-customer")
    .populate("service")
    .populate("slot");

  if (!bookings.length) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "No complete bookings found for this user"
    );
  }

  return bookings;
};

const getUserBookingsPanding = async (userId: string) => {
  const query: any = {
    customer: userId,
    status: "pending",
  };

  const bookings = await Booking.find(query)
    .select("-customer")
    .populate("service")
    .populate("slot");

  if (!bookings.length) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "No complete bookings found for this user"
    );
  }

  return bookings;
};

export const BookingServices = {
  createBooking,
  getallBooing,
  getUserBookings,
  getUserBookingsPanding,
};
