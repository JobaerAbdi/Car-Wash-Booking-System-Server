import express from "express";
import { AuthControllers } from "./auth.controllar";
import validationRequest from "../../middlewares/validaedRequest";
import { AuthValidation } from "./auth.validation";

const router = express.Router();

router.post('/auth/login',validationRequest(AuthValidation.loginValidatoinSchema), AuthControllers.loginUserDB);

router.post('/auth/refresh-token', validationRequest(AuthValidation.refreshTokenValidationSchema), AuthControllers.refreshTokenDB);

export const AuthRoutes = router;