import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { IParcelCreate } from "../../interfaces/parcels/parcel.type";
import { AppError, handleError, handlePrismaError } from "../../errors";
import parcelCreateService from "../../services/parcels/parcel.create.service";

const parcelCreateController = async (req: Request, res: Response) => {
  const data = req.body;

  try {
    const serviceResponse = await parcelCreateService(data as IParcelCreate);

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

export default parcelCreateController;
