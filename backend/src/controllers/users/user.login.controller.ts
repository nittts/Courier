import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { AppError, handleError, handlePrismaError } from "../../errors";
import userLoginService from "../../services/users/user.login.service";

const userLoginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const serviceResponse = await userLoginService({ email, password });

    return res.status(200).json(serviceResponse);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      handlePrismaError(err, res);
    }
  }
};

export default userLoginController;
