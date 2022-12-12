import { Prisma } from "@prisma/client";
import prisma from "../../database/database";
import { AppError } from "../../errors";

const cityDeleteService = async (id: number) => {
  try {
    const res = await prisma.cities
      .delete({
        where: { id },
      })
      .catch((err) => {
        throw new Prisma.PrismaClientKnownRequestError(err.message, {
          code: err.code,
          clientVersion: "4.7.1",
          meta: err.meta,
        });
      });

    if (!res) {
      throw new AppError(404, "city not Found.", "Not found");
    }

    return { message: "city deleted with success", results: res };
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

export default cityDeleteService;
