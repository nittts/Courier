import express, { Request, Response, NextFunction } from "express";
import AppRouter from "./Routes/index.routes";
import { AppError } from "./errors";
import path from "path";

const app = express();
app.use(express.json());
app.use(express.static("public"));

app.use("/api/v1", AppRouter);

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }
});

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "public") });
});

export default app;
