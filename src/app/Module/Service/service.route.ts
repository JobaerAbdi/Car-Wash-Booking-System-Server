import express from 'express';
import { ServiceControllars } from './service.controllar';
import validationRequest from '../../middlewares/validaedRequest';
import { ServiceValidation } from './service.validation';



const router = express.Router();

router.post('/services',validationRequest(ServiceValidation.createServiceValidationSchema), ServiceControllars.createServiceDb);


export const ServiceRoute  = router;