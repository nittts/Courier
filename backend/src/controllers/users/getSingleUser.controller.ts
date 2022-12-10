import getSingleUserService from "../../services/users/getSingleUser.service";
import { AppError, handleError } from "../../errors";
import { Request, Response } from "express";

const getSingleUserController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const User = await getSingleUserService(id);

    return res.status(200).send({ message: "Success.", results: User });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default getSingleUserController;
