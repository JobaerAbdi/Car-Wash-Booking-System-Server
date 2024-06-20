import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { BookingServices } from "./booking.service";

const createBookingDB = catchAsync(async (req, res) => {
    console.log(req.user);
  const customerId = req.user._id;
  const {
    serviceId,
    slotId,
    vehicleType,
    vehicleBrand,
    vehicleModel,
    manufacturingYear,
    registrationPlate,
  } = req.body;
  const result = await BookingServices.createBooking({
    serviceId,
    slotId,
    customerId,
    vehicleType,
    vehicleBrand,
    vehicleModel,
    manufacturingYear,
    registrationPlate,
  });
  res.status(httpStatus.OK).json({
    success: true,
    statusCode: 200,
    message: "Booking successful",
    data: result,
  });
});


export const BookingControllars = {
    createBookingDB
};

