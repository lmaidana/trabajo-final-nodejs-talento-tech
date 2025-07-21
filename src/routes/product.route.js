import { Router } from "express";
import productController from "../controllers/product.controller.js";
import authenticate from "../middlewares/auth.middleware.js";

const router = Router()

router.get("/", productController.getProducts);
router.get("/:id", productController.getProductById);
router.delete("/:id", productController.deleteProduct);
router.post("/create/", authenticate, productController.createProduct); // usa authentication
router.put("/:id", authenticate, productController.updateProduct); // usa authentication


export default router;