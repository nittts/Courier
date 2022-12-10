import { IUserUpdate } from "../../interfaces/Users/user.types";
import prisma from "../../database/Prisma/database";
import { AppError } from "../../errors";

const updateLoggedInUserService = async (data: IUserUpdate) => {
  const { id } = data;

  try {
    if (typeof id === "undefined") {
      throw new AppError(400, "User id field Missing.", "Bad Request");
    }

    if (data.userType_id && data.userType_id >= 2) {
      throw new AppError(401, "Only admins can update Users permissions type.", "Unauthorized");
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

export default updateLoggedInUserService;
