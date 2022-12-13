import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { ICityQueries } from "../../interfaces/cities/city.types";
import cityQueryService from "../../services/Cities/city.query.service";
import { AppError, handleError, handlePrismaError } from "../../errors";

const cityQueryController = async (req: Request, res: Response) => {
  const { postcode, name } = req.query;

  try {
    const serviceResponse = await cityQueryService({ postcode, name } as ICityQueries);

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

export default cityQueryController;
