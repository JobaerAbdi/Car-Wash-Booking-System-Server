import express from "express";
import { ServiceControllars } from "./service.controllar";
import validationRequest from "../../middlewares/validaedRequest";
import { ServiceValidation } from "./service.validation";

const router = express.Router();

router.post(
  "/services",
  validationRequest(ServiceValidation.createServiceValidationSchema),
  ServiceControllars.createServiceDb
);
router.get("/services/:id", ServiceControllars.getServiceByIdDB);

router.get("/services/", ServiceControllars.getAllServiceDB);

router.put("/services/:id", ServiceControllars.updateServiceDB);

router.delete("/services/:id", ServiceControllars.deleteServiceDB);

export const ServiceRoute = router;
