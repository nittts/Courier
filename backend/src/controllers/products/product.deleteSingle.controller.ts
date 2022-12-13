import { Request, Response } from "express";
import { AppError, handleError, handlePrismaError } from "../../errors";
import { Prisma } from "@prisma/client";
import productDeleteSingleService from "../../services/products/product.deleteSingle.service";

const productDeleteSingleController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const serviceResponse = await productDeleteSingleService(Number(id));

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

export default productDeleteSingleController;
