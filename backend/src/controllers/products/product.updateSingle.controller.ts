import { Prisma } from "../../../prisma";
import { Request, Response } from "express";
import { AppError, handleError, handlePrismaError } from "../../errors";
import productUpdateSingleService from "../../services/products/product.updateSingle.service";

const productUpdateSingleController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const serviceResponse = await productUpdateSingleService(Number(id), req.body);

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

export default productUpdateSingleController;
