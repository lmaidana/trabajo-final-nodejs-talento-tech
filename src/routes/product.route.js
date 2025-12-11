import { Router } from "express";
import productController from "../controllers/product.controller.js";
import { authenticate, authorizeAdmin } from "../middlewares/auth.middleware.js";

const router = Router()

router.get("/", productController.getProducts);
router.get("/:id", productController.getProductById);
router.delete("/:id", authenticate, authorizeAdmin, productController.deleteProduct);
router.post("/", authenticate, authorizeAdmin, productController.createProduct);
router.put("/:id", authenticate, authorizeAdmin, productController.updateProduct);
//router.patch("/:id", authenticate, authorizeAdmin, productController.editProduct);


export default router;