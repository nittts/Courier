import shipmentCreateService from "../../services/shipments/shipment.create.service";
import { Request, Response } from "express";
import { AppError, handleError, handlePrismaError } from "../../errors";
import { Prisma } from "@prisma/client";
import { IShipment } from "../../interfaces/shipments/shipment.types";

const shipmentCreateController = async (req: Request, res: Response) => {
  const shipmentData = req.body;

  try {
    const serviceResponse = await shipmentCreateService(shipmentData as IShipment);

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

export default shipmentCreateController;
