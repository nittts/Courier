import { AppError } from "../../errors";
import { Prisma } from "../../../prisma";
import prisma from "../../database/database";

const parcelGetAllService = async (page: number, perPage: number) => {
  try {
    const res = await prisma.parcels
      .findMany({
        skip: page * 1,
        take: perPage,
        orderBy: {
          name: "asc",
        },
        include: {
          products: true,
          users: { select: { name: true } },
          shipments: { select: { id: true } },
        },
      })
      .catch((err) => {
        throw new Prisma.PrismaClientKnownRequestError(err.message, {
          code: err.code,
          clientVersion: "4.7.1",
          meta: err.meta,
        });
      });

    const count = await prisma.parcels.count();

    return {
      message: "Parcels Found.",
      prev: page === 0 ? null : `localhost:3000/api/v1/parcels/all?page=${page - 1}&perPage=${perPage}`,
      next: count <= perPage * page ? null : `localhost:3000/api/v1/parcels/all?page=${page + 1}&perPage=${perPage}`,
      count: count,
      results: res,
    };
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

export default parcelGetAllService;
