import prisma from "../../database/database";
import { AppError } from "../../errors";

const deleteUserService = async (id: string) => {
  try {
    const findUser = await prisma.users.findFirst({ where: { id } });

    if (!findUser) {
      throw new AppError(404, "User not Found.", "Not Found");
    }

    const res = await prisma.users.delete({ where: { id } });

    return res;
  } catch (err) {
    if (err instanceof AppError) {
      throw new AppError(err.statusCode, err.message, err.name);
    }
  }
};

export default deleteUserService;
