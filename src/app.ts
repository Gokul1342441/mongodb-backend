import express from "express";
import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";
import loggerMiddleware from "./utils/loggerMiddleware";

const app = express();

app.use(express.json());
app.use(loggerMiddleware);

app.use("/api", userRoutes);
app.use("/api", productRoutes);

export default app;
