import httpStatus from "http-status";
import config from "../../config";
import catchAsync from "../../utils/catchAsync";
import { AuthServices } from "./auth.service";
// import sendResponse from "../../utils/sendResponse";

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

//refreshToken
// const refreshTokenDB = catchAsync(async (req, res) => {
//   const { refreshToken } = req.cookies;
//   console.log("This is token",refreshToken)
//   const result = await AuthServices.refreshToken(refreshToken);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Access token is retrieved succesfully!",
//     data: result,
//   });
// });


export const AuthControllers = {
  loginUserDB,
  // refreshTokenDB
};
