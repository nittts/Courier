import { Prisma } from "../../../prisma";
import { Request, Response } from "express";
import { AppError, handleError, handlePrismaError } from "../../errors";
import parcelDeleteSingleService from "../../services/parcels/parcel.deleteSingle.service";

const parcelDeleteSingleController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const serviceResponse = await parcelDeleteSingleService(id);

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

export default parcelDeleteSingleController;
