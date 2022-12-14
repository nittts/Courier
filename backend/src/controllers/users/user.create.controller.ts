import { Prisma } from "../../../prisma";
import { Request, Response } from "express";
import { AppError, handleError, handlePrismaError } from "../../errors";
import userCreateService from "../../services/users/user.create.service";

const userCreateController = async (req: Request, res: Response) => {
  const userData = req.body;

  try {
    const serviceResponse = await userCreateService(userData);

    return res.status(201).json(serviceResponse);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      handlePrismaError(err, res);
    }
  }
};

export default userCreateController;
