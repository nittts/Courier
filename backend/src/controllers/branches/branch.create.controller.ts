import branchCreateService from "../../services/branches/branch.create.service";
import { Request, Response } from "express";
import { AppError, handleError, handlePrismaError } from "../../errors";
import { Prisma } from "@prisma/client";

const branchCreateController = async (req: Request, res: Response) => {
  const branchData = req.body;

  try {
    const serviceResponse = await branchCreateService(branchData);

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

export default branchCreateController;
