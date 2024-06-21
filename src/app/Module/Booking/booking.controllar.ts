import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { BookingServices } from "./booking.service";
import sendResponse from "../../utils/sendResponse";

const createBookingDB = catchAsync(async (req, res) => {
  const bookingData = req.body;
  bookingData.customerId = req.user?.userId;
  const result = await BookingServices.createBooking(bookingData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Booking successful",
    data: result,
  });
});

const getallBooingDB = catchAsync(async (req, res) => {
  const result = await BookingServices.getallBooing();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All bookings retrieved successfully",
    data: result,
  });
});


const userBookingDB = catchAsync(async(req, res)=>{
  const userData = req.user.userId;
  const result = await BookingServices.getUserBookings(userData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User bookings retrieved successfully",
    data: result,
  });
});

export const BookingControllars = {
  createBookingDB,
  getallBooingDB,
  userBookingDB
};
