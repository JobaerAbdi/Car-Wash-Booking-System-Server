import { Router } from 'express';
import { BookingControllars } from './booking.controllar';
import validationRequest from '../../middlewares/validaedRequest';
import { BookingValidation } from './booking.validation';
import { AuthValidated } from '../../middlewares/auth.validation';
import { USER_Role } from '../User/user.consatand';


const router = Router();


router.post('/bookings',  AuthValidated(USER_Role.ADMIN), validationRequest(BookingValidation.createBookingValidationSchema),BookingControllars.createBookingDB);

export const BookingRoutes = router;