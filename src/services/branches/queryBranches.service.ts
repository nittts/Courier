import { IBranchQuery } from "../../interfaces/Branches/branch.types";
import prisma from "../../database/Prisma/database";
import { AppError } from "../../errors";

const queryBranchesService = async (queries: IBranchQuery) => {
  try {
    const isQueryEmpty = Object.values(queries).every((key) => typeof key === "undefined");

    if (isQueryEmpty) {
      throw new AppError(400, "No Param nor Query was provided.", "Bad Request");
    }

    const res = await prisma.branches.findMany({
      where: {
        OR: [{ name: queries.name }, { city_id: queries.city_id }],
      },
    });

    return { count: res.length, results: res };
  } catch (err) {
    if (err instanceof AppError) {
      throw new AppError(err.statusCode, err.message, err.status);
    }
  }
};

export default queryBranchesService;
