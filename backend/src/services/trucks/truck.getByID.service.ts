import { Prisma } from "@prisma/client";
import { AppError } from "../../errors";
import prisma from "../../database/database";

const truckGetByIDService = async (id: number) => {
  try {
    const res = await prisma.trucks
      .findFirst({ where: { id }, include: { users: { select: { name: true } } } })
      .catch((err) => {
        throw new Prisma.PrismaClientKnownRequestError(err.message, {
          code: err.code,
          clientVersion: "4.7.1",
          meta: err.meta,
        });
      });

    if (!res) {
      throw new AppError(404, "Truck not found.", "Not Found");
    }

    return { message: "Truck Found.", results: res };
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

export default truckGetByIDService;
