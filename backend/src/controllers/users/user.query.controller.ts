import { AppError, handleError } from "../../errors";
import { Request, Response } from "express";
import userQueryService from "../../services/users/user.query.service";
import { IUserQueries } from "../../interfaces/users/user.types";

const userQueryController = async (req: Request, res: Response) => {
  const { type_id, phone, name } = req.query;

  try {
    const serviceResponse = await userQueryService({ type_id, phone, name } as IUserQueries);

    return res.status(200).send(serviceResponse);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default userQueryController;
