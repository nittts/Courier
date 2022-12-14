import AppRouter from "./Routes/index.routes";
import express from "express";

const app = express();
app.use(express.json());

app.use("/api/v1", AppRouter);

export default app;
