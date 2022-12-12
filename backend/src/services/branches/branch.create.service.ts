import prisma from "../../database/database";
import { Prisma } from "@prisma/client";
import { AppError } from "../../errors";
import { IBranch } from "../../interfaces/branches/branch.types";

const branchCreateService = async (data: IBranch) => {
  try {
    const branchExists = await prisma.branches.findFirst({ where: { name: data.name } });

    if (branchExists) {
      throw new AppError(401, "Branch Already Exists.", "Unauthorized");
    }

    const res = await prisma.branches
      .create({
        data,
      })
      .catch((err) => {
        throw new Prisma.PrismaClientKnownRequestError(err.message, {
          code: err.code,
          clientVersion: "4.7.1",
          meta: err.meta,
        });
      });

    return { message: "Branch created with success.", results: res };
  } catch (err) {
    console.log(err);

    if (err instanceof AppError) {
      throw new AppError(err.statusCode, err.message, err.status);
    }

    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      throw new Prisma.PrismaClientKnownRequestError(err.message, {
        code: err.code,
        clientVersion: "4.7.1",
        meta: err.meta,
      });
    }
  }
};

export default branchCreateService;
