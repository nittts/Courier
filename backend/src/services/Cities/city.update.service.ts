import { Prisma } from "@prisma/client";
import prisma from "../../database/database";
import { AppError } from "../../errors";
import { ICityUpdate } from "../../interfaces/cities/city.types";

const updateCityService = async (id: number, data: ICityUpdate) => {
  try {
    const res = await prisma.cities
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

    return { message: "City Updated with success.", results: res };
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

export default updateCityService;
