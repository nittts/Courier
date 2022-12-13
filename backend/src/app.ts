import path from "path";
import AppRouter from "./Routes/index.routes";
import express, { Request, Response, NextFunction } from "express";

const app = express();
app.use(express.json());
app.use(express.static("public"));

app.use("/api/v1", AppRouter);

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "public") });
});

export default app;
