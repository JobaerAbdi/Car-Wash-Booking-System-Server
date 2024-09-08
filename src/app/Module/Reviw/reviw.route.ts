import express from "express";
import validationRequest from "../../middlewares/validaedRequest";
import { ReviwValidation } from "./reviw.validation";
import { ReviwControllars } from "./reviw.controllar";

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
  ReviwControllars.getReviwsDB
);

export const ReviwRoute = router;
