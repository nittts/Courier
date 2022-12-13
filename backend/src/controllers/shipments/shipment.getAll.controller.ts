import { AppError, handleError, handlePrismaError } from "../../errors";
import { Request, Response } from "express";
import { Prisma } from "@prisma/client";
import shipmentGetAllService from "../../services/shipments/shipment.getAll.service";

const shipmentsGetAllController = async (req: Request, res: Response) => {
  try {
    const { page, perPage } = req.query;

    const serviceResponse = await shipmentGetAllService(Number(page) || 0, Number(perPage) || 15);

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

export default shipmentsGetAllController;
