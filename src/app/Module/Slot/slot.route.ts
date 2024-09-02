import express from "express";
import { SlotControllars } from "./slot.controllar";
import validationRequest from "../../middlewares/validaedRequest";
import { SlotValidation } from "./slot.validation";
import { AuthValidated } from "../../middlewares/auth.validation";
import { USER_Role } from "../User/user.consatand";
const router = express.Router();

router.post(
  "/services/slots",
  AuthValidated(USER_Role.admin),
  validationRequest(SlotValidation.SlotValidationSchema),
  SlotControllars.createSlotsDB
);

router.get("/slots/availability", SlotControllars.getAvailableSlotsDB);

router.get("/slots/all", SlotControllars.getAllSlotsDB);

router.put("/slots/:id", SlotControllars.updateSlotDB);

export const SlotRoutes = router;
