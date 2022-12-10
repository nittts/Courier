import prisma from "../../database/database";
import { AppError } from "../../errors";

const getSingleUserService = async (id: string) => {
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

export default getSingleUserService;
