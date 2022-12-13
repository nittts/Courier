import prisma from "../../database/database";
import { Prisma } from "@prisma/client";
import { AppError } from "../../errors";

const productGetByIDService = async (id: number) => {
  try {
    const res = await prisma.products
      .findFirst({
        where: { id },
        include: {
          parcels: {
            select: {
              id: true,
            },
          },
          users: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      })
      .catch((err) => {
        throw new Prisma.PrismaClientKnownRequestError(err.message, {
          code: err.code,
          clientVersion: "4.7.1",
          meta: err.meta,
        });
      });

    if (!res) {
      throw new AppError(404, "Product not found.", "Not Found");
    }

    return { message: "Product Found.", results: res };
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

export default productGetByIDService;
