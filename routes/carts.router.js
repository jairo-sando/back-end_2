
import { Router } from "express";
import { purchaseCart } from "../controllers/carts.controller.js";
import { authJWT } from "../middlewares/auth.js";
import { authorize } from "../middlewares/authorize.js";

const router = Router();

//  USUARIO 
router.post(
  "/:cid/purchase",
  authJWT,
  authorize(["user"]),
  purchaseCart
);

export default router;