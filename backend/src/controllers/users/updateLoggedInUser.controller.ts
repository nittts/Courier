import updateLoggedInUserService from "../../services/users/updateLoggedInUser.service";
import { Request, Response } from "express";
import { AppError, handleError } from "../../errors";

const updateLoggedInUserController = async (req: Request, res: Response) => {
  const { id } = req.user;

  try {
    const data = {
      id,
      ...req.body,
    };

    const updatedUser = await updateLoggedInUserService(data);

    return res.status(200).send({ message: "User Updated.", results: updatedUser });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default updateLoggedInUserController;
