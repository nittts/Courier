import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { handleError, handlePrismaError, AppError } from "../../errors";
import shipmentGetByIDService from "../../services/shipments/shipment.getByID.service";

const shipmentGetByIDController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const serviceResponse = await shipmentGetByIDService(id);

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

export default shipmentGetByIDController;
