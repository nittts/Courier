import queryUserByTypeService from "../../services/users/queryUserByType.service";
import { Request, Response } from "express";
import { AppError, handleError } from "../../errors";
import { IUserTypeSearch } from "../../interfaces/Users/user.types";

const queryUserByTypeController = async (req: Request, res: Response) => {
  const { id, name } = req.query;

  try {
    const users = await queryUserByTypeService({ id: Number(id), name } as IUserTypeSearch);

    return res.status(200).send({ message: "Success.", results: users });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default queryUserByTypeController;
