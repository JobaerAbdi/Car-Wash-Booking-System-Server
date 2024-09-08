import { Router } from 'express';
import { BookingControllars } from './booking.controllar';
import validationRequest from '../../middlewares/validaedRequest';
import { BookingValidation } from './booking.validation';
import { AuthValidated } from '../../middlewares/auth.validation';
import { USER_Role } from '../User/user.consatand';


const router = Router();


router.post('/create/bookings',  AuthValidated(USER_Role.user, USER_Role.admin), validationRequest(BookingValidation.createBookingValidationSchema),BookingControllars.createBookingDB);

router.get('/bookings',AuthValidated(USER_Role.admin) ,BookingControllars.getallBooingDB);

router.get('/my-bookings', AuthValidated(USER_Role.user, USER_Role.admin), BookingControllars.userBookingDB);

router.get('/my-pending-bookings', AuthValidated(USER_Role.user, USER_Role.admin), BookingControllars.userBookingPendingDB);

export const BookingRoutes = router;