
import { Router } from "express";
import { createProduct, updateProduct, deleteProduct } from "../controllers/products.controller.js";
import { authJWT } from "../middlewares/auth.js";
import { authorize } from "../middlewares/authorize.js";

const router = Router();

//  ADMIN
router.post("/", authJWT, authorize(["admin"]), createProduct);
router.put("/:pid", authJWT, authorize(["admin"]), updateProduct);
router.delete("/:pid", authJWT, authorize(["admin"]), deleteProduct);

export default router;