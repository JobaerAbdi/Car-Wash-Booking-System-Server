import express from "express";
import { UserControllars } from "./user.controllar";
import validationRequest from "../../middlewares/validaedRequest";
import { UserValidation } from "./user.validation";
import { USER_Role } from "./user.consatand";
import { AuthValidated } from "../../middlewares/auth.validation";

const router = express.Router();

router.post(
  "/auth/signup",
  validationRequest(UserValidation.createUserValidationSchema),
  UserControllars.createUserDB
);

router.get("/users", AuthValidated(USER_Role.admin), UserControllars.getUserDB);

export const UserRoutes = router;
