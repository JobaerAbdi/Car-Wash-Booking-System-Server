import { Router } from "express";
import { UserRoutes } from "../Module/User/user.route";
import { ServiceRoute } from "../Module/Service/service.route";
import { SlotRoutes } from "../Module/Slot/slot.route";
import { BookingRoutes } from "../Module/Booking/booking.route";
import { AuthRoutes } from "../Module/Auth/auth.route";
import { PaymentRoutes } from "../Module/Payment/payment.route";
import { ReviwRoute } from "../Module/Reviw/reviw.route";


const router = Router();

const moduleRoutes = [
  {
    path: "",
    route: UserRoutes,
  },
  {
    path: "",
    route : ServiceRoute
  },
  {
    path: "",
    route: SlotRoutes
  },
  {
    path: "",
    route: BookingRoutes 
  },
  {
    path: "",
    route: AuthRoutes 
  },
  {
    path: "",
    route: PaymentRoutes 
  },
  {
    path: "",
    route: ReviwRoute 
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;