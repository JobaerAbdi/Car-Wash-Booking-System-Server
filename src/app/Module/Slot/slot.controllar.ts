import { SlotService } from "./slost.service";
import catchAsync from "../../utils/catchAsync";
import httpStatus from "http-status";
// import AppError from "../../Error/AppError";

const createSlotsDB = catchAsync(async (req, res) => {
  const { service, date, startTime, endTime } = req.body;
  const result = await SlotService.createSlot(
    service,
    date,
    startTime,
    endTime
  );
  res.status(httpStatus.OK).json({
    success: true,
    statusCode: 200,
    message: "Slots created successfully",
    data: result,
  });
});

const getAvailableSlotsDB = catchAsync(async (req, res) => {
  // const { data, serviceId } = req.query;
  // if (!data || !serviceId) {
  //   throw new AppError(httpStatus.NOT_FOUND, "Not Fount data or serviceId !");
  // }
  const result = await SlotService.getAvailableSlots();
  res.status(httpStatus.OK).json({
    success: true,
    statusCode: 200,
    message: "Available slots retrieved successfull",
    data: result,
  });
});

export const SlotControllars = {
  createSlotsDB,
  getAvailableSlotsDB,
};
