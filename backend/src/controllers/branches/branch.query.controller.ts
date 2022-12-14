import { Prisma } from "../../../prisma";
import { Request, Response } from "express";
import { AppError, handleError, handlePrismaError } from "../../errors";
import { IBranchQueries } from "../../interfaces/branches/branch.types";
import branchQueryService from "../../services/branches/branch.query.service";

const branchQueryController = async (req: Request, res: Response) => {
  const { address, name, lat, long } = req.query;

  try {
    const serviceResponse = await branchQueryService({
      address,
      name,
      coords: { branch_lat: lat, branch_long: long },
    } as IBranchQueries);

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

export default branchQueryController;
