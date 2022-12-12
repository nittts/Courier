import cityCreateService from "../../services/Cities/city.create.service";
import { Request, Response } from "express";
import { AppError, handleError, handlePrismaError } from "../../errors";
import { Prisma } from "@prisma/client";

const cityCreateController = async (req: Request, res: Response) => {
  const cityData = req.body;

  try {
    const serviceResponse = await cityCreateService(cityData);

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

export default cityCreateController;
