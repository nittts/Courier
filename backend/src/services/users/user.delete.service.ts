import { Prisma } from "@prisma/client";
import prisma from "../../database/database";
import { AppError } from "../../errors";

const userDeleteService = async (id: string) => {
  try {
    const res = await prisma.users.delete({
      where: { id },
    });

    if (!res) {
      throw new AppError(404, "User not Found.", "Not found");
    }

    return { message: "User deleted with success", results: res };
  } catch (err) {
    console.log({ err });

    if (err instanceof AppError) {
      throw new AppError(err.statusCode, err.message, err.status);
    }

    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      throw new AppError(500, "Unkown Server error. Please Contact Support.", "Internal Server Error");
    }
  }
};

export default userDeleteService;
