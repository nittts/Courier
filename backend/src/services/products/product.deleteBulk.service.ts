import prisma from "../../database/database";
import { Prisma } from "@prisma/client";
import { AppError } from "../../errors";
import { IProductDelete } from "../../interfaces/products/product.type";

const productDeleteBulkService = async (data: IProductDelete[]) => {
  try {
    const res = await prisma
      .$transaction(data.map((product) => prisma.products.delete({ where: { id: product.id } })))
      .catch((err) => {
        throw new Prisma.PrismaClientKnownRequestError(err.message, {
          code: err.code,
          clientVersion: "4.7.1",
          meta: err.meta,
        });
      });

    return { message: "Products deleted with success.", results: res };
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

export default productDeleteBulkService;
