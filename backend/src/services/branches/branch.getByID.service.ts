import { AppError } from "../../errors";
import { Prisma } from "@prisma/client";
import prisma from "../../database/database";

const branchGetByIDService = async (id: number) => {
  try {
    const res = await prisma.branches
      .findFirst({ where: { id }, include: { users: { include: { userTypes: { select: { type: true } } } } } })
      .catch((err) => {
        throw new Prisma.PrismaClientKnownRequestError(err.message, {
          code: err.code,
          clientVersion: "4.7.1",
          meta: err.meta,
        });
      });

    if (!res) {
      throw new AppError(404, "Branch not found.", "Not Found");
    }

    return { message: "Branch Found.", results: res };
  } catch (err) {
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

export default branchGetByIDService;
