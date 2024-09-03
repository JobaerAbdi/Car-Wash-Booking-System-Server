import { SlotService } from "./slost.service";
import catchAsync from "../../utils/catchAsync";
import httpStatus from "http-status";
import AppError from "../../Error/AppError";
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
  const { data, serviceId } = req.query;
  const result = await SlotService.getAvailableSlots(data as string, serviceId as string);
  res.status(httpStatus.OK).json({
    success: true,
    statusCode: 200,
    message: "Available slots retrieved successfull",
    data: result,
  });
});

const getAvailableSlotsByServiceIdDB = catchAsync(async (req, res) => {
  const { serviceId } = req.query;
  const result = await SlotService.getAvailableSlotsByServiceId(serviceId as string);
  res.status(httpStatus.OK).json({
    success: true,
    statusCode: 200,
    message: "Available slots by service ID retrieved successfully",
    data: result,
  });
});


const getAllSlotsDB = catchAsync(async (req, res) => {
  const result = await SlotService.getAllSlots();
  res.status(httpStatus.OK).json({
    success: true,
    statusCode: 200,
    message: "All slots retrieved successfull",
    data: result,
  });
});


const updateSlotDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new AppError(httpStatus.NOT_FOUND, "Slot ID not found");
  }
  const updateData = req.body;
  const result = await SlotService.updateSlot(id, updateData);
  res.status(httpStatus.OK).json({
    success: true,
    statusCode: 200,
    message: "Update slot successfull",
    data: result,
  });
});

export const SlotControllars = {
  createSlotsDB,
  getAvailableSlotsDB,
  getAllSlotsDB,
  updateSlotDB,
  getAvailableSlotsByServiceIdDB
};
