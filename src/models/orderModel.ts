import mongoose, { Schema, Document } from "mongoose";

export interface Order extends Document {
  userId: mongoose.Types.ObjectId;
  productId: mongoose.Types.ObjectId;
  quantity: number;
  purchaseDate: Date;
}

const OrderSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, required: true, min: 1 },
  purchaseDate: { type: Date, default: Date.now },
});

export default mongoose.model<Order>("Order", OrderSchema);
