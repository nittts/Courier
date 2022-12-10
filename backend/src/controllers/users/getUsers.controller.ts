import getUsersService from "../../services/users/getUsers.service";
import { AppError, handleError } from "../../errors";
import { Request, Response } from "express";

const getUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getUsersService();

    return res.status(200).send({ message: "Success.", ...users });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default getUsersController;
