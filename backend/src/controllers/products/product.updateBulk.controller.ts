import { Prisma } from "../../../prisma";
import { Request, Response } from "express";
import { AppError, handleError, handlePrismaError } from "../../errors";
import { IProductUpdateBulk } from "../../interfaces/products/product.type";
import productUpdateBulkService from "../../services/products/product.updateBulk.service";

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
