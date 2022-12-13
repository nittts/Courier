import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { AppError, handleError, handlePrismaError } from "../../errors";
import { IProductDelete } from "../../interfaces/products/product.type";
import productDeleteBulkService from "../../services/products/product.deleteBulk.service";

const productDeleteBulkController = async (req: Request, res: Response) => {
  const { data } = req.body;

  try {
    const serviceResponse = await productDeleteBulkService(data as IProductDelete[]);

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

export default productDeleteBulkController;
