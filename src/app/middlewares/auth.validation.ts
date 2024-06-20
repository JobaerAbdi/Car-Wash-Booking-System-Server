import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from "../config";
import catchAsync from "../utils/catchAsync";
import httpStatus from "http-status";
import AppError from "../Error/AppError";
import { CUserRole } from "../Module/User/user.interface";
import { User } from "../Module/User/user.model";


export const AuthValidated = (...requierdRole: CUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
    }
    const decoded = jwt.verify(token.split(' ')[1], config.jwt_access_secret as string) as JwtPayload;
    const { userId, role, iat } = decoded;

    const isExistsUser = await User.findById(userId);
    console.log(isExistsUser)

    if (!isExistsUser) {
      throw new AppError(httpStatus.NOT_FOUND, "This user is not found!");
    }
  
    if (!(requierdRole[0] === isExistsUser.role)) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
    }

    req.user = decoded as JwtPayload;
    next();
  });
};