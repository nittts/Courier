import { AppError, handleError, handlePrismaError } from "../../errors";
import { Request, Response } from "express";
import userGetAllService from "../../services/users/user.getAll.service";
import { Prisma } from "@prisma/client";

const userGetAllController = async (req: Request, res: Response) => {
  try {
    const { page, perPage } = req.query;

    const serviceResponse = await userGetAllService(Number(page) || 0, Number(perPage) || 15);

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

export default userGetAllController;
