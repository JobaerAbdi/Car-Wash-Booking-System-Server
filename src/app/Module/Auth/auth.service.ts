import httpStatus from "http-status";
import AppError from "../../Error/AppError";
import { User } from "../User/user.model";
import { CLoginUser } from "./auth.interface";
import config from "../../config";
import { createToken, isPasswordMatched } from "./auth.utils";
import jwt, { JwtPayload } from "jsonwebtoken";

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

// Refresh Token
const refreshToken = async (token: string) => {
  try {
    const decoded = jwt.verify(token, config.jwt_access_secret as string) as JwtPayload;
    const { userId, iat } = decoded;
    const user = await User.findById(userId);
    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, "User not found");
    }
    // Check if token was issued before password change
    if (user.passwordChangedAt && User.isJWTIssuedBeforePasswordChange(user.passwordChangedAt, iat as any)) {
      throw new AppError(httpStatus.UNAUTHORIZED, "Token invalid due to password change");
    }
    const jwtPayload = { userId: user._id, role: user.role };
    const accessToken = createToken(
      jwtPayload as any,
      config.jwt_access_secret as string,
      config.jwt_assess_exrpired as string
    );
    return { accessToken };
  } catch (error) {
    throw new AppError(httpStatus.UNAUTHORIZED, "Invalid token");
  }
};

export const AuthServices = {
  loginUser,
  refreshToken
};
