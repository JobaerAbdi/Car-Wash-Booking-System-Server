import express from "express";
import { ServiceControllars } from "./service.controllar";
import validationRequest from "../../middlewares/validaedRequest";
import { ServiceValidation } from "./service.validation";

const router = express.Router();

router.post(
  "/",
  validationRequest(ServiceValidation.createServiceValidationSchema),
  ServiceControllars.createServiceDb
);
router.get("/:id", ServiceControllars.getServiceByIdDB);

router.get("/", ServiceControllars.getAllServiceDB);

router.put("/:id", ServiceControllars.updateServiceDB);

router.delete("/:id", ServiceControllars.deleteServiceDB);

export const ServiceRoute = router;
