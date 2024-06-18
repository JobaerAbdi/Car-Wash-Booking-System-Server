import express from "express";
import { UserControllars } from "./user.controllar";
import validationRequest from "../../middlewares/validaedRequest";
import { UserValidation } from "./user.validation";

const router = express.Router();

router.post("/signup",validationRequest(UserValidation.createUserValidationSchema), UserControllars.createUserDB);

export const UserRoutes = router;
