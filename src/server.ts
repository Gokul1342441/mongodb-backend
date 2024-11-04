import * as dotenv from "dotenv";
import app from "./app";
import connectDB from "./config/db";
import { logger } from "./utils/logger";
import loggerMiddleware from "./utils/loggerMiddleware";

dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(loggerMiddleware);

connectDB()
  .then(() => logger.info("MongoDB connected successfully"))
  .catch((error) => {
    logger.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  });

// server port
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
