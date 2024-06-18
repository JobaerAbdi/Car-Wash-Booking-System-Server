import { Router } from "express";
import { UserRoutes } from "../Module/User/user.route";


const router = Router();

const moduleRoutes = [
  {
    path: "/api/auth",
    route: UserRoutes,
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;