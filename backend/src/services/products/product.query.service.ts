import prisma from "../../database/database";
import { AppError } from "../../errors";
import { Prisma } from "@prisma/client";
import { IProductQueries } from "../../interfaces/products/product.type";

const productQueryService = async (queries: IProductQueries) => {
  try {
    const emptyQuery = Object.entries(queries).every((entry) => {
      return typeof entry[1] === "undefined";
    });

    if (emptyQuery) {
      throw new AppError(400, "Query is empty.", "Bad Request");
    }

    const res = await prisma.products
      .findMany({
        where: {
          OR: [
            { name: queries.name },
            { parcel_id: queries.parcel },
            { client_id: queries.client },
            { weight: { lte: queries.weight } },
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

    return { message: "Products Found.", results: res };
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

export default productQueryService;
