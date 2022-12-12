import { AppError, handleError, handlePrismaError } from "../../errors";
import userGetByIDService from "../../services/users/user.getByID.service";
import { Request, Response } from "express";
import { Prisma } from "@prisma/client";

const userGetByIDController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const serviceResponse = await userGetByIDService(id);

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

export default userGetByIDController;
