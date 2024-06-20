import { Router } from 'express';
import { BookingControllars } from './booking.controllar';
import validationRequest from '../../middlewares/validaedRequest';
import { BookingValidation } from './booking.validation';


const router = Router();


router.post('/bookings', validationRequest(BookingValidation.createBookingValidationSchema),BookingControllars.createBookingDB);

export const BookingRoutes = router;