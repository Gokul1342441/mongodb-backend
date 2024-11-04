import { Router } from "express";
import {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  buyProduct,
  getUserPurchases,
} from "../controllers/userController";

const router = Router();

router.post("/users", createUser);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
router.post("/users/:id/buy_product", buyProduct);
router.get("/users/:id/purchases", getUserPurchases);

export default router;
