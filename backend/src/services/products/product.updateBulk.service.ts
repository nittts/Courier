import { AppError } from "../../errors";
import { Prisma } from "../../../prisma";
import prisma from "../../database/database";
import { IProductUpdateBulk } from "../../interfaces/products/product.type";

const productUpdateBulkService = async (data: IProductUpdateBulk[]) => {
  try {
    const res = await prisma
      .$transaction(data.map((product) => prisma.products.update({ where: { id: product.id }, data: product.data })))
      .catch((err) => {
        throw new Prisma.PrismaClientKnownRequestError(err.message, {
          code: err.code,
          clientVersion: "4.7.1",
          meta: err.meta,
        });
      });

    return { message: "Products updated with success.", results: res };
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

export default productUpdateBulkService;
