import { AppError, handleError, handlePrismaError } from "../../errors";
import { Request, Response } from "express";
import { Prisma } from "@prisma/client";
import { ITruckQueries } from "../../interfaces/trucks/truck.types";
import truckQueryService from "../../services/trucks/truck.query.service";

const truckQueryController = async (req: Request, res: Response) => {
  const { license_plate, brand, max_weight, available } = req.query;

  try {
    const serviceResponse = await truckQueryService({
      license_plate,
      brand,
      max_weight: max_weight ? Number(max_weight) : undefined,
      available: available ? JSON.parse(available as string) : undefined,
    } as ITruckQueries);

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

export default truckQueryController;
