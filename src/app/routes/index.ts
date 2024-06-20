import { Router } from "express";
import { UserRoutes } from "../Module/User/user.route";
import { ServiceRoute } from "../Module/Service/service.route";
import { SlotRoutes } from "../Module/Slot/slot.route";


const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: UserRoutes,
  },
  {
    path: "",
    route : ServiceRoute
  },
  {
    path: "",
    route: SlotRoutes
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;