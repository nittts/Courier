import { Prisma } from "../../../prisma";
import { Request, Response } from "express";
import { AppError, handleError, handlePrismaError } from "../../errors";
import cityDeleteService from "../../services/Cities/city.delete.service";

const cityDeleteController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const serviceResponse = await cityDeleteService(Number(id));

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

export default cityDeleteController;
