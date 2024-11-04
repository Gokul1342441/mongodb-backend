import { Request, Response, NextFunction } from "express";
import { logger } from "../utils/logger";

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  res.on("finish", () => {
    logger.info(
      `Request URL: ${req.url}, Request Method: ${req.method}, Status Code: ${res.statusCode}`
    );
  });
  next();
};

export default loggerMiddleware;
