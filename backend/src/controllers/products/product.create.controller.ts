import productCreateService from "../../services/products/product.create.service";
import { Request, Response } from "express";
import { AppError, handleError, handlePrismaError } from "../../errors";
import { Prisma } from "@prisma/client";
import { IProductCreate } from "../../interfaces/products/product.type";

const productCreateController = async (req: Request, res: Response) => {
  const { data } = req.body;

  try {
    const serviceResponse = await productCreateService(data as IProductCreate[]);

    return res.status(201).json(serviceResponse);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      handlePrismaError(err, res);
    }
  }
};

export default productCreateController;
