
import { Router } from "express";
import {
  createCart,
  purchaseCart,
  addProductToCart
} from "../controllers/carts.controller.js";
import { authJWT } from "../middlewares/auth.js";
import { authorize } from "../middlewares/authorize.js";

const router = Router();

// USER — crear carrito
router.post(
  "/",
  authJWT,
  authorize(["user"]),
  createCart
);

// USER — agregar producto al carrito
router.post(
  "/:cid/products/:pid",
  authJWT,
  authorize(["user"]),
  addProductToCart
);

// USER — comprar carrito
router.post(
  "/:cid/purchase",
  authJWT,
  authorize(["user"]),
  purchaseCart
);

export default router;