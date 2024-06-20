import httpStatus from "http-status";
import AppError from "../../Error/AppError";
import { User } from "../User/user.model";
import { CLoginUser } from "./auth.interface";
import config from "../../config";


const loginUser = async (payload: CLoginUser) => {
    const isExistsUser = await User.isUserExsitsByCustomId(payload.id);
    if (!isExistsUser) {
      throw new AppError(httpStatus.NOT_FOUND, "This user is Not Found !!");
    }
  
    // Check user status
    if (isExistsUser.isDeleted) {
      throw new AppError(httpStatus.FORBIDDEN, "This user is deleted !!");
    }
  
    if (isExistsUser.status === "blocked") {
      throw new AppError(httpStatus.FORBIDDEN, "This user is blocked !!");
    }
  
    // Verify password
    const isPasswordValid = await User.isPasswordMaths(
      payload.password,
      isExistsUser.password
    );
    if (!isPasswordValid) {
      throw new AppError(httpStatus.UNAUTHORIZED, "Invalid password");
    }
  
    // Create token and send to the user
    const jwrPayload = {
      userId: isExistsUser.id,
      role: isExistsUser.role,
    };
    const accessToken = createToken(jwrPayload, config.jwt_access_secret as string, config.jwt_assess_exrpired as string)
  
  
    const refreshToken = createToken(jwrPayload, config.jwt_refreshtoken as string, config.jwt_refresh_exrpired as string)
  
  
    const needsPasswordChange = isExistsUser?.needsPasswordChange;
    return { accessToken, refreshToken, needsPasswordChange };
  };
  

  export const AuthServices = {
    loginUser
  };