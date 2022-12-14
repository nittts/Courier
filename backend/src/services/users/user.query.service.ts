import { Prisma } from "../../../prisma";
import { AppError } from "../../errors";
import prisma from "../../database/database";
import { IUserQueries } from "../../interfaces/users/user.types";

const userQueryService = async (queries: IUserQueries) => {
  try {
    const emptyQuery = Object.entries(queries).every((entry) => {
      return typeof entry[1] === "undefined";
    });

    if (emptyQuery) {
      throw new AppError(400, "Query is empty.", "Bad Request");
    }

    if (typeof queries.type_id !== "undefined") {
      queries.type_id = Number(queries.type_id);
    }

    const res = await prisma.users
      .findMany({
        where: {
          OR: [{ user_type_id: queries.type_id }, { phone: queries.phone }, { name: queries.name }],
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

    return { message: "User Found.", results: res };
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

export default userQueryService;
