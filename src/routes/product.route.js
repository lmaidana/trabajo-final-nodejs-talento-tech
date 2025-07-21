import { Router } from "express";
import productController from "../controllers/product.controller.js";

const router = Router()

router.get("/", productController.getProducts);
router.get("/:id", productController.getProductById);
router.delete("/:id", productController.deleteProduct);
router.post("/create/", productController.createProduct); // usa authentication
router.put("/:id", productController.updateProduct); // usa authentication


export default router;