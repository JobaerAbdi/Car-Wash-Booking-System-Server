import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { AuthServices } from "./auth.service";

const loginUserDB = catchAsync(async (req, res) => {
//   const { email, password } = req.body;
  const { token, user } = await AuthServices.loginUser(req.body);
  res.status(httpStatus.OK).json({
    success: true,
    statusCode: 200,
    message: "User logged in successfully",
    data: {
      token,
      user,
    },
  });
});

export const AuthControllers = {
  loginUserDB,
};
