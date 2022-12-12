import prisma from "../../database/database";
import { AppError } from "../../errors";
import { Prisma } from "@prisma/client";
import { IBranchQueries } from "../../interfaces/branches/branch.types";

const branchQueryService = async (queries: IBranchQueries) => {
  try {
    const emptyQuery = Object.entries(queries).every((entry) => {
      return typeof entry[1] === "undefined";
    });

    if (emptyQuery) {
      throw new AppError(400, "Query is empty.", "Bad Request");
    }

    if (!queries.coords?.branch_lat || !queries.coords?.branch_long) {
      throw new AppError(
        400,
        "Invalid Coordinates, search with coords requires both Latitude and Longitude.",
        "Bad Request"
      );
    }

    const res = await prisma.branches
      .findMany({
        where: {
          OR: [
            { name: queries.name },
            { address: queries.address },
            { branch_long: queries.coords?.branch_long },
            { branch_lat: queries.coords?.branch_lat },
          ],
        },
        include: { users: { include: { userTypes: { select: { type: true } } } } },
      })
      .catch((err) => {
        throw new Prisma.PrismaClientKnownRequestError(err.message, {
          code: err.code,
          clientVersion: "4.7.1",
          meta: err.meta,
        });
      });

    return { message: "Branches Found.", results: res };
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

export default branchQueryService;
