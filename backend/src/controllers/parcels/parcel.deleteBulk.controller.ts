import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { IParcelDelete } from "../../interfaces/parcels/parcel.type";
import { AppError, handleError, handlePrismaError } from "../../errors";
import parcelDeleteBulkService from "../../services/parcels/parcel.deleteBulk.service";

const parcelDeleteBulkController = async (req: Request, res: Response) => {
  const { data } = req.body;

  try {
    const serviceResponse = await parcelDeleteBulkService(data as IParcelDelete[]);

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

export default parcelDeleteBulkController;
