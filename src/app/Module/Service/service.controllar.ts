import httpStatus from "http-status";
import AppError from "../../Error/AppError";
import catchAsync from "../../utils/catchAsync";
import { ServiceServices } from "./service.service";

//create service
const createServiceDb = catchAsync(async (req, res) => {
  const movieData = req.body;
  const result = await ServiceServices.createService(movieData);
  res.json({
    success: true,
    message: "Service created successfully",
    data: result,
  });
});

//getBId Service
const getServiceByIdDB = catchAsync(async (req, res) => {
  const { serviceId } = req.params;
  if (!serviceId) {
    throw new AppError(httpStatus.NOT_FOUND, "Service ID not found");
  }
  const result = await ServiceServices.getServiceById(serviceId);
  res.json({
    success: true,
    message: "Service retrieved successfully",
    data: result,
  });
});

//get all
const getAllServiceDB = catchAsync(async (req, res) => {
  const result = await ServiceServices.getAllService();
  res.status(200).json({
    success: true,
    message: "Services retrieved successfully",
    data: result,
  });
});

export const ServiceControllars = {
  createServiceDb,
  getServiceByIdDB,
  getAllServiceDB
};
