
import { Router } from "express";
import { addProductToCart } from "../controllers/carts.controller.js";
import { authJWT } from "../middlewares/auth.js";
import { authorize } from "../middlewares/authorize.js";

const router = Router();

// USUARIO
router.post(
  "/:cid/product/:pid",
  authJWT,
  authorize(["user"]),
  addProductToCart
);

export default router;