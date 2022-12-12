import { Prisma } from "@prisma/client";
import prisma from "../../database/database";
import { AppError } from "../../errors";
import { IUserUpdate } from "../../interfaces/users/user.types";

const updateUserService = async (id: string, data: IUserUpdate) => {
  try {
    const res = await prisma.users.update({
      where: { id },
      data,
    });

    return { message: "User Updated with success.", results: res };
  } catch (err) {
    if (err instanceof AppError) {
      throw new AppError(err.statusCode, err.message, err.status);
    }

    console.log(err);
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      throw new AppError(500, "Unkown Server error. Please Contact Support.", "Internal Server Error");
    }
  }
};

export default updateUserService;
