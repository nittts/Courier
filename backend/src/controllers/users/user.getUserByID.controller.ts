import { AppError, handleError } from "../../errors";
import userGetByIDService from "../../services/users/user.getByID.service";
import { Request, Response } from "express";

const userGetByIDController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const serviceResponse = await userGetByIDService(id);

    return res.status(200).send(serviceResponse);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default userGetByIDController;
