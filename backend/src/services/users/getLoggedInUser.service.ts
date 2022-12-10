import prisma from "../../database/Prisma/database";
import { AppError } from "../../errors";

const getLoggedInUserService = async (id: string) => {
  try {
    const res = await prisma.users.findFirst({ where: { id } });

    if (!res) {
      throw new AppError(404, "User not Found.", "Not Found");
    }

    return res;
  } catch (err) {
    if (err instanceof AppError) {
      throw new AppError(err.statusCode, err.message, err.status);
    }
  }
};

export default getLoggedInUserService;
