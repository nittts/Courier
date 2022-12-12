import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const verifyAuthTokenMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization as string;

    if (!token) {
      res.status(401).json({ status: "Unauthorized", message: "Missing Authorization Headers." });
    } else {
      jwt.verify(token, String(process.env.SECRET_KEY), (error: any, decoded: any) => {
        if (error) {
          return res.status(401).json({ status: "Unauthorized", message: `${error.message}.` });
        }

        req.user = decoded.user;

        next();
      });
    }
  } catch (err) {
    return res.status(401).json({ status: "Unauthorized", message: "Invalid Token" });
  }
};

export default verifyAuthTokenMiddleware;
