import { IUserUpdate } from "../../interfaces/Users/user.types";
import prisma from "../../database/database";
import { AppError } from "../../errors";

const updateUserService = async (data: IUserUpdate) => {
  const { id } = data;

  try {
    if (typeof id === "undefined") {
      throw new AppError(400, "User id field Missing.", "Bad Request");
    }

    const UserExists = await prisma.users.findFirst({ where: { id } });

    if (!UserExists) {
      throw new AppError(404, "User not Found.", "Not Found");
    }
    const res = await prisma.users.update({
      where: { id },
      data,
    });

    return res;
  } catch (err) {
    if (err instanceof AppError) {
      throw new AppError(err.statusCode, err.message, err.status);
    }
  }
};

export default updateUserService;
