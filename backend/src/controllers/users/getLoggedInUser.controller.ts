import getLoggedInUserService from "../../services/users/getLoggedInUser.service";
import { AppError, handleError } from "../../errors";
import { Request, Response } from "express";

const getLoggedInUserController = async (req: Request, res: Response) => {
  const { id } = req.user;

  try {
    const User = await getLoggedInUserService(id);

    return res.status(200).send({ message: "Success.", results: User });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default getLoggedInUserController;
