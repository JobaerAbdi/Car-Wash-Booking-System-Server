import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { AuthServices } from "./auth.service";

const loginUserDB = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUser(req.body);
  const { user, accessToken } = result;
  res.status(httpStatus.OK).json({
    statusCode: httpStatus.OK,
    success: true,
    message: "User is logged in successfully",
    token: accessToken,
    data: user,
  });
});

// // refreshToken
// const refreshTokenDB = catchAsync(async (req, res) => {
//   const { refreshToken } = req.cookies;
//   const result = await AuthServices.refreshToken(refreshToken);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Access token is retrieved successfully!",
//     data: result,
//   });
// });


export const AuthControllers = {
  loginUserDB,
  // refreshTokenDB
};
