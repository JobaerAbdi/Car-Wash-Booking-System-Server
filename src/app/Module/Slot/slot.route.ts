import express from "express";
import { SlotControllars } from "./slot.controllar";
import validationRequest from "../../middlewares/validaedRequest";
import { SlotValidation } from "./slot.validation";
const router = express.Router();

router.post(
  "/services/slots",
  validationRequest(SlotValidation.SlotValidationSchema),
  SlotControllars.createSlotsDB
);

router.get("/slots/availability", SlotControllars.getAvailableSlotsDB);

export const SlotRoutes = router;
