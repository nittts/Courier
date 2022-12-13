import { AppError } from "../../errors";
import { Prisma } from "@prisma/client";
import prisma from "../../database/database";

const truckDeleteService = async (id: number) => {
  try {
    const res = await prisma.trucks
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
      throw new AppError(404, "Truck not Found.", "Not found");
    }

    return { message: "Truck deleted with success", results: res };
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

export default truckDeleteService;
