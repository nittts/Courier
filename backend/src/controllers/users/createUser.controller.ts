import createUserService from "../../services/users/createUser.service";
import { AppError, handleError } from "../../errors";
import { Request, Response } from "express";
import { v4 as uuid } from "uuid";
import * as bcrypt from "bcrypt";

const createUserController = async (req: Request, res: Response) => {
  const { name, email, password, phone, userType_id, branch_id } = req.body;

  try {
    const hashedPwd = bcrypt.hashSync(password, 10);

    const newUser = await createUserService({
      id: uuid(),
      name,
      email,
      password: hashedPwd,
      phone,
      userType_id,
      branch_id,
    });

    return res.status(201).send({ message: "User Created.", results: newUser });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default createUserController;
