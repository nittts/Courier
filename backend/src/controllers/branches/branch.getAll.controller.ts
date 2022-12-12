import { AppError, handleError, handlePrismaError } from "../../errors";
import { Request, Response } from "express";
import { Prisma } from "@prisma/client";
import branchGetAllService from "../../services/branches/branch.getAll.service";

const branchGetAllController = async (req: Request, res: Response) => {
  try {
    const { page, perPage } = req.query;

    const serviceResponse = await branchGetAllService(Number(page) || 0, Number(perPage) || 15);

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

export default branchGetAllController;
