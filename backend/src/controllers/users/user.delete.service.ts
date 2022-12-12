import { Request, Response } from "express";
import { AppError, handleError } from "../../errors";
import userDeleteService from "../../services/users/user.delete.service";

const userDeleteController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const serviceResponse = await userDeleteService(id);

    return res.status(200).send(serviceResponse);
  } catch (err) {
    handleError(err as AppError, res);
  }
};

export default userDeleteController;
