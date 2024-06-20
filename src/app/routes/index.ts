import { Router } from "express";
import { UserRoutes } from "../Module/User/user.route";
import { ServiceRoute } from "../Module/Service/service.route";
import { SlotRoutes } from "../Module/Slot/slot.route";
import { BookingRoutes } from "../Module/Booking/booking.route";


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
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;