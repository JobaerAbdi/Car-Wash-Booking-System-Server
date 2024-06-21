import httpStatus from "http-status";
import AppError from "../../Error/AppError";
import catchAsync from "../../utils/catchAsync";
import { ServiceServices } from "./service.service";
import sendResponse from "../../utils/sendResponse";

//create service
const createServiceDb = catchAsync(async (req, res) => {
  const movieData = req.body;
  const result = await ServiceServices.createService(movieData);
 sendResponse(res,{
  statusCode:httpStatus.OK,
  success:true,
  message: "Service created successfully",
  data:result
 })
});

//getBId Service
const getServiceByIdDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new AppError(httpStatus.NOT_FOUND, "Service ID not found");
  }
  const result = await ServiceServices.getServiceById(id);
  sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message: "Service retrieved successfully",
    data:result
   })
});

//get all
const getAllServiceDB = catchAsync(async (req, res) => {
  const result = await ServiceServices.getAllService();
  sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message: "Service retrieved successfully",
    data:result
   })
});

//update services
const updateServiceDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new AppError(httpStatus.NOT_FOUND, "Service ID not found");
  }
  const updateData = req.body;
  const result = await ServiceServices.updateService(id, updateData);
  sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message: "Service updated successfully",
    data:result
   })
});

//delete service
const deleteServiceDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new AppError(httpStatus.NOT_FOUND, "Service ID not found");
  }
  const result = await ServiceServices.deleteService(id);
  sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message: "Service deleted successfully",
    data:result
   })
});

export const ServiceControllars = {
  createServiceDb,
  getServiceByIdDB,
  getAllServiceDB,
  updateServiceDB,
  deleteServiceDB,
};
