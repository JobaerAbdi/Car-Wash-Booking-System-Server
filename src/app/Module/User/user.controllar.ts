import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { UserServices } from "./user.service";
import AppError from "../../Error/AppError";

const createUserDB = catchAsync(async (req, res) => {
  const userData = req.body;
  const result = await UserServices.createUser(userData);
  res.status(httpStatus.OK).json({
    success: true,
    message: "User registered successfully!",
    data: result,
  });
});

const getUserDB = catchAsync(async (req, res) => {
  const result = await UserServices.getAllUser();
  res.status(httpStatus.OK).json({
    success: true,
    message: "all User retrieved successfully!",
    data: result,
  });
});

const updateUserDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new AppError(httpStatus.NOT_FOUND, "User ID not found");
  }
  const updateData = req.body;
  const result = await UserServices.updateUser(id, updateData);
  res.status(httpStatus.OK).json({
    success: true,
    statusCode: 200,
    message: "Update User successfull",
    data: result,
  });
});

export const UserControllars = {
  createUserDB,
  getUserDB,
  updateUserDB
};
