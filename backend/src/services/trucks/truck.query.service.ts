import { AppError } from "../../errors";
import { Prisma } from "@prisma/client";
import prisma from "../../database/database";
import { ITruckQueries } from "../../interfaces/trucks/truck.types";

const truckQueryService = async (queries: ITruckQueries) => {
  try {
    const emptyQuery = Object.entries(queries).every((entry) => {
      return typeof entry[1] === "undefined";
    });

    if (emptyQuery) {
      throw new AppError(400, "Query is empty.", "Bad Request");
    }

    const res = await prisma.trucks
      .findMany({
        where: {
          OR: [
            { max_weight: { equals: queries.max_weight } },
            { license_plate: queries.license_plate },
            { brand: queries.brand },
            { available: queries.available },
          ],
        },
      })
      .catch((err) => {
        throw new Prisma.PrismaClientKnownRequestError(err.message, {
          code: err.code,
          clientVersion: "4.7.1",
          meta: err.meta,
        });
      });

    if (res.length === 0) {
      throw new AppError(404, "Nothing was found.", "Not Found");
    }

    return { message: "Trucks Found.", results: res };
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

export default truckQueryService;
