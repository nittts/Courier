import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { AppError, handleError, handlePrismaError } from "../../errors";
import userGetLoggedUserService from "../../services/users/user.getLoggedUser.service";

const userGetLoggedUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.user;

    const serviceResponse = await userGetLoggedUserService(id);

    return res.status(200).send(serviceResponse);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      handlePrismaError(err, res);
    }
  }
};

export default userGetLoggedUserController;
