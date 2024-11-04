import User, { User as UserType } from "../models/userModel";
import Order from "../models/orderModel";
import Product from "../models/productModel";
import { PipelineStage } from "mongoose";
import { ObjectId } from "mongodb";

export const createUser = async (userData: UserType) => {
  return await User.create(userData);
};

export const getUserById = async (userId: string) => {
  return await User.findById(userId);
};

export const updateUser = async (
  userId: string,
  updateData: Partial<UserType>,
) => {
  return await User.findByIdAndUpdate(userId, updateData, { new: true });
};

export const deleteUser = async (userId: string) => {
  return await User.findByIdAndDelete(userId);
};

export const purchaseProduct = async (
  userId: string,
  productId: string,
  quantity: number,
) => {
  const user = await User.findById(userId);
  const product = await Product.findById(productId);
  if (!user || !product) {
    throw new Error("User or product not found");
  }
  if (!product.name || !product.price || !product.description) {
    throw new Error("Product is missing required fields");
  }
  const order = new Order({
    userId: user._id,
    productId: product._id,
    quantity,
    purchaseDate: new Date(),
  });
  await order.save();
  return { message: "Product purchased successfully", orderId: order._id };
};

export const getUserPurchases = async (userId: string) => {
  const pipeline: PipelineStage[] = [
    {
      $match: { userId: new ObjectId(userId) },
    },
    {
      $lookup: {
        from: "products",
        localField: "productId",
        foreignField: "_id",
        as: "productInfo",
      },
    },
    {
      $unwind: "$productInfo",
    },
    {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "_id",
        as: "userInfo",
      },
    },
    {
      $unwind: "$userInfo",
    },
    {
      $project: {
        _id: 0,
        userId: "$userInfo._id",
        userName: "$userInfo.name",
        userEmail: "$userInfo.email",
        productName: "$productInfo.name",
        productDescription: "$productInfo.description",
        productPrice: "$productInfo.price",
        quantity: 1,
        purchaseDate: 1,
      },
    },
  ];

  return await Order.aggregate(pipeline);
};
