
import { Router } from "express";
import {
  createProduct,
  updateProduct,
  deleteProduct,
  getProducts
} from "../controllers/products.controller.js";
import { authJWT } from "../middlewares/auth.js";
import { authorize } from "../middlewares/authorize.js";

const router = Router();

// USER / PUBLIC
router.get("/", authJWT, getProducts);

// ADMIN
router.post("/", authJWT, authorize(["admin"]), createProduct);
router.put("/:pid", authJWT, authorize(["admin"]), updateProduct);
router.delete("/:pid", authJWT, authorize(["admin"]), deleteProduct);

export default router;