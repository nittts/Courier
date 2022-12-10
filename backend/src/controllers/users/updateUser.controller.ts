import updateUserService from "../../services/users/updateUser.service";
import { Request, Response } from "express";
import { AppError, handleError } from "../../errors";

const updateUserController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const data = {
      id,
      ...req.body,
    };

    const updatedUser = await updateUserService(data);

    return res.status(200).send({ message: "User Updated.", results: updatedUser });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default updateUserController;
