import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import config from "../config";
import { JwtPayload } from "../Interface/Jwt";
import catchAsync from "../utils/catchAsync";
import httpStatus from "http-status";
import AppError from "../Error/AppError";
import { CUserRole } from "../Module/User/user.interface";


export const AuthValidated = (...requierdRole: CUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
    }

    console.log(token)
    const decoded = jwt.verify(token.split(' ')[1], config.jwt_access_secret as string) as JwtPayload;
    const { role, userId, iat } = decoded;

    const isExistsUser = await User.isUserExsitsByCustomId(userId);
    if (!isExistsUser) {
      throw new AppError(httpStatus.NOT_FOUND, "This user is not found!");
    }

    // Check user status
    if (isExistsUser.isDeleted) {
      throw new AppError(httpStatus.FORBIDDEN, "This user is deleted!");
    }

    if (isExistsUser.status === "blocked") {
      throw new AppError(httpStatus.FORBIDDEN, "This user is blocked!");
    }

    if (
      isExistsUser.passwordChangeAt &&
      User.isJWTIssuseBeforePasswoedChange(isExistsUser.passwordChangeAt, iat as number)
    ) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
    }

    if (requierdRole && !requierdRole.includes(role)) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
    }

    req.user = decoded as JwtPayload;
    next();
  });
};