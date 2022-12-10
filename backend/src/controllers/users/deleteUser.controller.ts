import deleteUserService from "../../services/users/deleteUser.service";
import { AppError, handleError } from "../../errors";
import { Request, Response } from "express";

const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const User = await deleteUserService(id);

    return res.status(200).send({ message: "User Deleted.", results: User });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default deleteUserController;
