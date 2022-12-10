import { IBranch } from "../../interfaces/Branches/branch.types";
import prisma from "../../database/database";
import { AppError } from "../../errors";

const createBranchService = async (data: IBranch) => {
  const { name, branch_lat, branch_long } = data;

  try {
    const missingValues = Object.entries(data).find((item) => typeof item[1] === "undefined");

    if (missingValues && missingValues?.length > 0) {
      throw new AppError(400, `${missingValues[0]} field is Required.`, "Bad Request");
    }

    if (branch_lat.length > 21 || branch_long.length > 21) {
      throw new AppError(400, "Invalid Coordinates length.", "Bad Request");
    }

    const alreadyExists = await prisma.branches.findFirst({ where: { name } });

    if (alreadyExists) {
      throw new AppError(400, "Branch Already Exists.", "Bad Request");
    }

    const branch = await prisma.branches.create({ data });

    return branch;
  } catch (err) {
    if (err instanceof AppError) {
      throw new AppError(err.statusCode, err.message, err.status);
    }
  }
};

export default createBranchService;
