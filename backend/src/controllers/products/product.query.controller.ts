import { AppError, handleError, handlePrismaError } from "../../errors";
import { Request, Response } from "express";
import { Prisma } from "@prisma/client";
import { IProductQueries } from "../../interfaces/products/product.type";
import productQueryService from "../../services/products/product.query.service";

const productQueryController = async (req: Request, res: Response) => {
  const { name, parcel, weight, client } = req.query;

  try {
    const serviceResponse = await productQueryService({ name, parcel, weight, client } as IProductQueries);

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
