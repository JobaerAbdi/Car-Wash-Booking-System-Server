import express from "express";
import { SlotControllars } from "./slot.controllar";
import validationRequest from "../../middlewares/validaedRequest";
import { SlotValidation } from "./slot.validation";
const router = express.Router();

router.post("/slots", validationRequest(SlotValidation.SlotValidationSchema),SlotControllars.createSlotsHandler);

export const SlotRoutes = router;
