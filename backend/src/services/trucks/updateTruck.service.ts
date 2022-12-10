import prisma from "../../database/Prisma/database";
import { AppError } from "../../errors";
import { ITruckUpdate } from "../../interfaces/trucks/truck.types";

const updateTruckService = async (data: ITruckUpdate) => {
  const { id } = data;

  try {
    if (typeof id === "undefined") {
      throw new AppError(400, "Truck id field Missing.", "Bad Request");
    }

    const TruckExists = await prisma.trucks.findFirst({ where: { id } });

    if (!TruckExists) {
      throw new AppError(404, "Truck not Found.", "Not Found");
    }
    const res = await prisma.trucks.update({
      where: { id },
      data,
    });

    return res;
  } catch (err) {
    if (err instanceof AppError) {
      throw new AppError(err.statusCode, err.message, err.status);
    }
  }
};

export default updateTruckService;
