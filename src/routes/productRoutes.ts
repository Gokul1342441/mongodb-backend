import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  deleteProduct,
} from "../controllers/productController";

const router = Router();

router.post("/products", createProduct);
router.get("/products", getAllProducts);
router.delete("/products/:id", deleteProduct);

export default router;
