import mongoose from "mongoose";
import { logger } from "../utils/logger";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI as string);
    logger.info("Connected to MongoDB");
  } catch (error) {
    logger.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
