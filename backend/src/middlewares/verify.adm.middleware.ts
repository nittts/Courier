import { Request, Response, NextFunction } from "express";
import prisma from "../database/database";

const verifyAdmMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const ReqUser = req.user;
  const { id } = req.params;

  try {
    const user = await prisma.users.findFirst({ where: { id: ReqUser.id } });

    if (!user) {
      return res.status(404).json({ status: "Not Found", message: "User was not Found." });
    }

    if (ReqUser.id !== id) {
      if (user && user.user_type_id >= 2) {
        return res.status(401).json({ status: "Unauthorized", message: "No admin Authorization." });
      }

      return res
        .status(403)
        .json({ status: "Forbidden", message: "Users are only allowed to update their own Resources." });
    }

    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ status: "Unauthorized", message: "No admin Authorization." });
  }
};

export default verifyAdmMiddleware;
