import { Prisma } from "../../../prisma";
import { Request, Response } from "express";
import { IUserQueries } from "../../interfaces/users/user.types";
import userQueryService from "../../services/users/user.query.service";
import { AppError, handleError, handlePrismaError } from "../../errors";

const userQueryController = async (req: Request, res: Response) => {
  const { type_id, phone, name } = req.query;

  try {
    const serviceResponse = await userQueryService({ type_id, phone, name } as IUserQueries);

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

export default userQueryController;
