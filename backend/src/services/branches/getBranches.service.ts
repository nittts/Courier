import prisma from "../../database/database";
import { AppError } from "../../errors";

const getBranchesService = async () => {
  try {
    const res = await prisma.branches.findMany();

    return { count: res.length, results: res };
  } catch (err) {
    if (err instanceof AppError) {
      throw new AppError(err.statusCode, err.message, err.status);
    }
  }
};

export default getBranchesService;
