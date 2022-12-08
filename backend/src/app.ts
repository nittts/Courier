import express, { Request, Response, NextFunction } from "express";
import AppRouter from "./Routes/index.routes";
import { AppError } from "./errors";

const app = express();
app.use(express.json());

app.use("/api/v1", AppRouter);

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }
});

export default app;
