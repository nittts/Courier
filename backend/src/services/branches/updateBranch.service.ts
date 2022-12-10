import { IBranchUpdate } from "../../interfaces/Branches/branch.types";
import prisma from "../../database/database";
import { AppError } from "../../errors";

const updateBranchService = async (data: IBranchUpdate) => {
  const { id } = data;

  try {
    if (typeof id === "undefined") {
      throw new AppError(400, "Branch id field Missing.", "Bad Request");
    }

    const cityExists = await prisma.branches.findFirst({ where: { id } });

    if (!cityExists) {
      throw new AppError(404, "Branch not Found.", "Not Found");
    }

    const res = await prisma.branches.update({
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

export default updateBranchService;
