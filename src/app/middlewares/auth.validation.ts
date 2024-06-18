import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import config from "../config";


interface JwtPayload {
    role: string;
  }
  
  export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'You are Unauthorized Access!' });
    }
  
    const token = authHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, config.jwtSecret) as JwtPayload;
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }
  };
  
  export const authorizeAdmin = (req: Request, res: Response, next: NextFunction) => {
    if (req.user?.role !== 'admin') {
      return res.status(403).json({ success: false, message: 'Forbidden' });
    }
    next();
  };