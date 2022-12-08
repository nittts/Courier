import prisma from "../../database/Prisma/database";
import { AppError } from "../../errors";

const deleteBranchService = async (id: number) => {
  try {
    const findBranch = await prisma.branches.findFirst({ where: { id } });

    if (findBranch === null) {
      throw new AppError(404, "Branch not Found.", "Not Found");
    }

    const res = await prisma.branches.delete({ where: { id } });

    return res;
  } catch (err) {
    if (err instanceof AppError) {
      throw new AppError(err.statusCode, err.message, err.name);
    }
  }
};

export default deleteBranchService;
