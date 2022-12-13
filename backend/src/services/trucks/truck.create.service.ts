import { AppError } from "../../errors";
import { Prisma } from "@prisma/client";
import prisma from "../../database/database";
import { ITruckCreate } from "../../interfaces/trucks/truck.types";

const truckCreateService = async (data: ITruckCreate) => {
  try {
    const truckExists = await prisma.trucks.findFirst({ where: { license_plate: data.license_plate } });

    if (truckExists) {
      throw new AppError(401, "Truck Already Exists.", "Unauthorized");
    }

    const res = await prisma.trucks
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

    return { message: "Truck created with success.", results: res };
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

export default truckCreateService;
