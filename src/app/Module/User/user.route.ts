import express from "express";
import { UserControllars } from "./user.controllar";

const router = express.Router();

router.post("/signup", UserControllars.createUserDB);

export const UserRoutes = router;
