import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { AppError, handleError, handlePrismaError } from "../../errors";
import productGetAllService from "../../services/products/product.getAll.service";

const productGetAllController = async (req: Request, res: Response) => {
  try {
    const { page, perPage } = req.query;

    const serviceResponse = await productGetAllService(Number(page) || 0, Number(perPage) || 15);

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

export default productGetAllController;
