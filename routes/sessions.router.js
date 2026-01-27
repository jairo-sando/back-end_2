
import { Router } from "express";
import {
  register,
  login,
  current,
  resetPassword
} from "../controllers/sessions.controller.js";
import { authJWT } from "../middlewares/auth.js"

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/current", authJWT, current);
router.post("/reset-password", resetPassword);

export default router;
