import prisma from "../../database/database";
import { AppError } from "../../errors";
import { Prisma } from "@prisma/client";
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

    const res = await prisma.users.findMany({
      where: {
        OR: [{ user_type_id: queries.type_id }, { phone: queries.phone }, { name: queries.name }],
      },
    });

    return { message: "User Found.", results: res };
  } catch (err) {
    console.log(err);

    if (err instanceof AppError) {
      throw new AppError(err.statusCode, err.message, err.status);
    }

    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      throw new AppError(500, "Unkown Server error. Please Contact Support.", "Internal Server Error");
    }
  }
};

export default userQueryService;
