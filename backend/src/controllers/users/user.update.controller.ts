import { AppError, handleError } from "../../errors";
import { Request, Response } from "express";
import updateUserService from "../../services/users/user.update.service";

const userUpdateController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const serviceResponse = await updateUserService(id, req.body);

    return res.status(200).send(serviceResponse);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default userUpdateController;
