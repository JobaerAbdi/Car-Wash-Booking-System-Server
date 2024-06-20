import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { BookingServices } from "./booking.service";

const createBookingDB = catchAsync(async (req, res) => {
  const bookingData = {
    ...req.body,
    customer: req.user.userId,
  };

  const result = await BookingServices.createBooking(bookingData);
  res.status(httpStatus.OK).json({
    success: true,
    statusCode: 200,
    message: "Booking successful",
    data: result,
  });
});

export const BookingControllars = {
  createBookingDB,
};
