import prisma from "../../database/database";
import { AppError } from "../../errors";

const getSingleBranchService = async (id: number) => {
  try {
    const res = await prisma.branches.findFirst({ where: { id } });

    if (!res) {
      throw new AppError(404, "Branch not Found.", "Not Found");
    }

    return res;
  } catch (err) {
    if (err instanceof AppError) {
      throw new AppError(err.statusCode, err.message, err.status);
    }
  }
};

export default getSingleBranchService;
