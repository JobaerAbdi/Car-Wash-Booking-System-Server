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

router.get("/slots/all",   AuthValidated(USER_Role.admin), SlotControllars.getAllSlotsDB);

router.get("/slots/service-slots-available", SlotControllars.getAvailableSlotsByServiceIdDB);

router.put("/slots/:id", AuthValidated(USER_Role.admin), SlotControllars.updateSlotDB);

export const SlotRoutes = router;
