import { Router } from "express";
import authController from "../controllers/auth.controller.js";
import { authenticate, authorizeAdmin } from "../middlewares/auth.middleware.js";

const router = Router()

router.post("/login", authController.login);
router.post("/logout", authController.logout);
router.get("/me", authenticate, authController.me);

export default router;