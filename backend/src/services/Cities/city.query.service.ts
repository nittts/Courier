import prisma from "../../database/database";
import { AppError } from "../../errors";
import { Prisma } from "@prisma/client";
import { ICityQueries } from "../../interfaces/cities/city.types";

const cityQueryService = async (queries: ICityQueries) => {
  try {
    const emptyQuery = Object.entries(queries).every((entry) => {
      return typeof entry[1] === "undefined";
    });

    if (emptyQuery) {
      throw new AppError(400, "Query is empty.", "Bad Request");
    }

    const res = await prisma.cities
      .findMany({
        where: {
          OR: [{ name: queries.name }, { postcode: queries.postcode }],
        },
      })
      .catch((err) => {
        throw new Prisma.PrismaClientKnownRequestError(err.message, {
          code: err.code,
          clientVersion: "4.7.1",
          meta: err.meta,
        });
      });

    return { message: "City Found.", results: res };
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

export default cityQueryService;
