import { AppError, handleError, handlePrismaError } from "../../errors";
import { Request, Response } from "express";
import { Prisma } from "@prisma/client";
import updateCityService from "../../services/Cities/city.update.service";

const CityUpdateController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const serviceResponse = await updateCityService(Number(id), req.body);

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

export default CityUpdateController;
