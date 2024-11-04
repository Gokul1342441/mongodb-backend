import { Request, Response, RequestHandler } from "express";
import * as productService from "../services/productService";
import { logger } from "../utils/logger";

export const createProduct: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const newProduct = await productService.createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    logger.error("Error creating product:", error);
    res.status(500).json({ error: "Server Error" });
  }
};

export const getAllProducts: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    logger.error("Error getting products:", error);
    res.status(500).json({ error: "Server Error" });
  }
};

export const deleteProduct: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const deletedProduct = await productService.deleteProduct(req.params.id);
    if (!deletedProduct) {
      res.status(404).json({ error: "Product not found" });
      return;
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    logger.error("Error deleting product:", error);
    res.status(500).json({ error: "Server Error" });
  }
};
