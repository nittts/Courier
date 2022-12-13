import { Request, Response } from "express";
import { AppError, handleError, handlePrismaError } from "../../errors";
import { Prisma } from "@prisma/client";
import parcelUpdateBulkService from "../../services/parcels/parcel.updateBulk.service";
import { IParcelUpdateBulk } from "../../interfaces/parcels/parcel.type";

const parcelUpdateBulkController = async (req: Request, res: Response) => {
  const { data } = req.body;

  try {
    const serviceResponse = await parcelUpdateBulkService(data as IParcelUpdateBulk[]);

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

export default parcelUpdateBulkController;
