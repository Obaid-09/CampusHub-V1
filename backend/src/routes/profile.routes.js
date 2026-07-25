import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { getProfile } from "../controllers/profile.controller.js";

const router = Router();

router.use(verifyJWT);

router.get("/", getProfile);

export default router;