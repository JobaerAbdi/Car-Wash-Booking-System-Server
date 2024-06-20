import express from "express";
import { ServiceControllars } from "./service.controllar";
import validationRequest from "../../middlewares/validaedRequest";
import { ServiceValidation } from "./service.validation";
import { AuthValidated } from "../../middlewares/auth.validation";
import { USER_Role } from "../User/user.consatand";

const router = express.Router();

router.post(
  "/services",
  AuthValidated(USER_Role.ADMIN),
  validationRequest(ServiceValidation.createServiceValidationSchema),
  ServiceControllars.createServiceDb
);
router.get("/services/:id", ServiceControllars.getServiceByIdDB);

router.get("/services/", ServiceControllars.getAllServiceDB);

router.put("/services/:id",  AuthValidated(USER_Role.ADMIN), ServiceControllars.updateServiceDB);

router.delete("/services/:id",   AuthValidated(USER_Role.ADMIN), ServiceControllars.deleteServiceDB);

export const ServiceRoute = router;
