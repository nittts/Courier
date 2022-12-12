import prisma from "../../database/database";
import { Prisma } from "@prisma/client";
import { AppError } from "../../errors";
import { ICity } from "../../interfaces/cities/city.types";

const cityCreateService = async (data: ICity) => {
  try {
    const cityExists = await prisma.cities.findFirst({ where: { name: data.name } });

    if (cityExists) {
      throw new AppError(401, "City Already Exists.", "Unauthorized");
    }

    const res = await prisma.cities
      .create({
        data,
      })
      .catch((err) => {
        throw new Prisma.PrismaClientKnownRequestError(err.message, {
          code: err.code,
          clientVersion: "4.7.1",
          meta: err.meta,
        });
      });

    return { message: "City created with success.", results: res };
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

export default cityCreateService;
