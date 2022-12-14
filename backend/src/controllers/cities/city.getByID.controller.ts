import { Prisma } from "../../../prisma";
import { Request, Response } from "express";
import { handleError, handlePrismaError, AppError } from "../../errors";
import cityGetByIDService from "../../services/Cities/city.getByID.service";

const cityGetByIDController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const serviceResponse = await cityGetByIDService(Number(id));

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

export default cityGetByIDController;
