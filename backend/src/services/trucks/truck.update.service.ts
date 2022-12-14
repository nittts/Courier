import { AppError } from "../../errors";
import { Prisma } from "../../../prisma";
import prisma from "../../database/database";
import { ITruckUpdate } from "../../interfaces/trucks/truck.types";

const updateTruckService = async (id: number, data: ITruckUpdate) => {
  try {
    const res = await prisma.trucks
      .update({
        where: { id },
        data: { ...data, branch_id: isNaN(Number(data.branch_id)) ? undefined : Number(data.branch_id) },
      })
      .catch((err) => {
        throw new Prisma.PrismaClientKnownRequestError(err.message, {
          code: err.code,
          clientVersion: "4.7.1",
          meta: err.meta,
        });
      });

    return { message: "Truck Updated with success.", results: res };
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

export default updateTruckService;
