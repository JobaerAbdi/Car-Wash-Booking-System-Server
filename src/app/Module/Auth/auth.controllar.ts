import httpStatus from "http-status";
import config from "../../config";
import catchAsync from "../../utils/catchAsync";
import { AuthServices } from "./auth.service";

const loginUserDB = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUser(req.body);

  const { user, refreshToken, accessToken } = result;
  res.cookie("refreshToken", refreshToken, {
    secure: config.NODE_ENV === "production",
    httpOnly: true,
  });
  res.status(httpStatus.OK).json({
    statusCode: httpStatus.OK,
    success: true,
    message: "User is logged in successfully",
    token: accessToken,
    data: user,
  });
});

export const AuthControllers = {
  loginUserDB,
};
