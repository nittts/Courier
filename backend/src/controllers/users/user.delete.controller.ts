import { Prisma } from "../../../prisma";
import { Request, Response } from "express";
import { AppError, handleError, handlePrismaError } from "../../errors";
import userDeleteService from "../../services/users/user.delete.service";

const userDeleteController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const serviceResponse = await userDeleteService(id);

    return res.status(200).send(serviceResponse);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      handlePrismaError(err, res);
    }
  }
};

export default userDeleteController;
