import { Request, Response } from "express";
import { AppError, handleError, handlePrismaError } from "../../errors";
import { Prisma } from "@prisma/client";
import productUpdateBulkService from "../../services/products/product.updateBulk.service";
import { IProductUpdateBulk } from "../../interfaces/products/product.type";

const productUpdateBulkController = async (req: Request, res: Response) => {
  const { data } = req.body;

  try {
    const serviceResponse = await productUpdateBulkService(data as IProductUpdateBulk[]);

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

export default productUpdateBulkController;
