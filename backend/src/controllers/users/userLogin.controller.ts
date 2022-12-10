import { Request, Response } from "express";
import { AppError, handleError } from "../../errors";
import userLoginService from "../../services/users/userLogin.service";

const userLoginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const token = await userLoginService(email, password);

    return res.send(200).send({ message: "Success.", token });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default userLoginController;
