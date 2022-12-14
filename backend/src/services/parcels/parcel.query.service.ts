import { AppError } from "../../errors";
import { Prisma } from "../../../prisma";
import prisma from "../../database/database";
import { IParcelQueries } from "../../interfaces/parcels/parcel.type";

const parcelQueryService = async (queries: IParcelQueries) => {
  try {
    const emptyQuery = Object.entries(queries).every((entry) => {
      return typeof entry[1] === "undefined";
    });

    if (emptyQuery) {
      throw new AppError(400, "Query is empty.", "Bad Request");
    }

    const res = await prisma.parcels
      .findMany({
        where: {
          OR: [{ name: queries.name }, { content: queries.content }, { client_id: queries.client_id }],
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

    return { message: "Parcels Found.", results: res };
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

export default parcelQueryService;
