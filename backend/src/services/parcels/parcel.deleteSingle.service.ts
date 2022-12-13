import { AppError } from "../../errors";
import { Prisma } from "@prisma/client";
import prisma from "../../database/database";

const parcelDeleteSingleService = async (id: string) => {
  try {
    const res = await prisma.parcels.delete({ where: { id } }).catch((err) => {
      throw new Prisma.PrismaClientKnownRequestError(err.message, {
        code: err.code,
        clientVersion: "4.7.1",
        meta: err.meta,
      });
    });

    return { message: "Parcel deleted with success.", results: res };
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

export default parcelDeleteSingleService;
