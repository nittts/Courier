import userCreateService from "../../services/users/user.create.service";
import { Request, Response } from "express";
import { AppError, handleError } from "../../errors";

const userCreateController = async (req: Request, res: Response) => {
  const userData = req.body;

  try {
    const serviceResponse = await userCreateService(userData);

    return res.status(201).json(serviceResponse);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default userCreateController;
