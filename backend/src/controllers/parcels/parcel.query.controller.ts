import { AppError, handleError, handlePrismaError } from "../../errors";
import { Request, Response } from "express";
import { Prisma } from "@prisma/client";
import { IParcelQueries } from "../../interfaces/parcels/parcel.type";
import parcelQueryService from "../../services/parcels/parcel.query.service";

const productQueryController = async (req: Request, res: Response) => {
  const { name, content, client } = req.query;

  try {
    const serviceResponse = await parcelQueryService({
      name,
      content,
      client_id: client,
    } as IParcelQueries);

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

export default productQueryController;
