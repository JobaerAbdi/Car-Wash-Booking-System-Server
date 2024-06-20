import express from "express";
import { AuthControllers } from "./auth.controllar";

const router = express.Router();

router.post('/auth/login',AuthControllers.loginUserDB);

export const AuthRoutes = router;