import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { AppError, handleError, handlePrismaError } from "../../errors";
import updateTruckService from "../../services/trucks/truck.update.service";

const truckUpdateController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const serviceResponse = await updateTruckService(Number(id), req.body);

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

export default truckUpdateController;
