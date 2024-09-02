import httpStatus from "http-status";
import AppError from "../../Error/AppError";
import { User } from "../User/user.model";
import { CLoginUser } from "./auth.interface";
import config from "../../config";
import { createToken, isPasswordMatched } from "./auth.utils";
// import jwt, { JwtPayload } from "jsonwebtoken";

const loginUser = async (payload: CLoginUser) => {
  const user = await User.findOne({ email: payload.email }).select("+password");
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "This user is Not Found !!");
  }

  // Verify password
  const passwordMatch = await isPasswordMatched(
    payload.password,
    user.password
  );

  if (!passwordMatch) {
    throw new Error("Password not matched");
  }

  // Create token and send to the user
  const jwrPayload = {
    userId: user.id,
    role: user.role,
  };
  const accessToken = createToken(
    jwrPayload,
    config.jwt_access_secret as string,
    config.jwt_assess_exrpired as string
  );

  const refreshToken = createToken(
    jwrPayload,
    config.jwt_refreshtoken as string,
    config.jwt_refresh_exrpired as string
  );

  return { user, accessToken, refreshToken };
};

// //refreshToken
// const refreshToken = async (token: string) => {

//   console.log("This is token",token)
//   // checking if the given token is valid
//   const decoded = jwt.verify(
//     token,
//     config.jwt_refreshtoken as string
//   ) as JwtPayload;

//   const { userId, iat } = decoded;

//   // checking if the user is exist
//   const user = await User.find(userId);
//   console.log(user);

//   if (!user) {
//     throw new AppError(httpStatus.NOT_FOUND, "This user is not found !");
//   }

//   if (
//     user &&
//     User.isJWTIssuseBeforePasswoedChange(user.passwordChangeAt, iat as number)
//   ) {
//     throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized !");
//   }
//   const jwtPayload = {
//     userId: user._id,
//     role: user.role,
//   };

//   const accessToken = createToken(
//     jwtPayload,
//     config.jwt_access_secret as string,
//     config.jwt_assess_exrpired as string
//   );

//   return {
//     accessToken,
//   };
// };

export const AuthServices = {
  loginUser,
  // refreshToken
};
