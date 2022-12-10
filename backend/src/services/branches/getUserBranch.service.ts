import prisma from "../../database/database";
import { AppError } from "../../errors";

const getUserBranchService = async (id: number) => {
  try {
    if (typeof id !== "number") {
      throw new AppError(400, "Invalid User Branch id.", "Bad Request");
    }

    const res = await prisma.branches.findFirst({ where: { id } });

    return res;
  } catch (err) {
    if (err instanceof AppError) {
      throw new AppError(err.statusCode, err.message, err.status);
    }
  }
};

export default getUserBranchService;
