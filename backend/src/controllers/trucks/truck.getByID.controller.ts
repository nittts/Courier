import { Prisma } from "../../../prisma";
import { Request, Response } from "express";
import { handleError, handlePrismaError, AppError } from "../../errors";
import truckGetByIDService from "../../services/trucks/truck.getByID.service";

const truckGetByIDController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const serviceResponse = await truckGetByIDService(Number(id));

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

export default truckGetByIDController;
