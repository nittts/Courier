import prisma from "../../database/database";
import { Prisma } from "@prisma/client";
import { AppError } from "../../errors";
import { IProductCreate } from "../../interfaces/products/product.type";

const productCreateService = async (data: IProductCreate[]) => {
  try {
    const res = await prisma
      .$transaction(data.map((product) => prisma.products.create({ data: product })))
      .catch((err) => {
        throw new Prisma.PrismaClientKnownRequestError(err.message, {
          code: err.code,
          clientVersion: "4.7.1",
          meta: err.meta,
        });
      });

    return { message: "Product created with success.", results: res };
  } catch (err) {
    console.log(err);

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

export default productCreateService;
