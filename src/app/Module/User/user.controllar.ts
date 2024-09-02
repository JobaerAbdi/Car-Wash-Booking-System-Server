import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { UserServices } from "./user.service";

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

export const UserControllars = {
  createUserDB,
  getUserDB
};
