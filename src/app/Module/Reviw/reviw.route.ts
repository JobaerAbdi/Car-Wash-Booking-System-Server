import express from "express";
import { AuthValidated } from "../../middlewares/auth.validation";
import validationRequest from "../../middlewares/validaedRequest";
import { ReviwValidation } from "./reviw.validation";
import { ReviwControllars } from "./reviw.controllar";
import { USER_Role } from "../User/user.consatand";

const router = express.Router();

//create User
router.post(
  "/create/reviw",
  validationRequest(ReviwValidation.createReviwValidationSchema),
  ReviwControllars.createReviwDB
);

//get USer
router.get(
  "/reviws",
  AuthValidated(USER_Role.user),
  ReviwControllars.getReviwsDB
);

export const ReviwRoute = router;
