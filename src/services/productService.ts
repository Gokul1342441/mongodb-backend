import Product, { Product as ProductType } from "../models/productModel";

export const createProduct = async (productData: ProductType) => {
  return await Product.create(productData);
};

export const getAllProducts = async () => {
  return await Product.find();
};

export const deleteProduct = async (productId: string) => {
  return await Product.findByIdAndDelete(productId);
};
