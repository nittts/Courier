import { AppError } from "../../errors";
import { Prisma } from "../../../prisma";
import prisma from "../../database/database";
import { IProductUpdateProps } from "../../interfaces/products/product.type";

const productUpdateSingleService = async (id: number, data: IProductUpdateProps) => {
  try {
    const res = await prisma.products
      .update({
        where: { id },
        data,
      })
      .catch((err) => {
        throw new Prisma.PrismaClientKnownRequestError(err.message, {
          code: err.code,
          clientVersion: "4.7.1",
          meta: err.meta,
        });
      });

    return { message: "Product Updated with success.", results: res };
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

export default productUpdateSingleService;
