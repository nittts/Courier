import prisma from "../../database/Prisma/database";
import { AppError } from "../../errors";

const queryTrucksAvailabilityService = async (available: boolean) => {
  try {
    const res = await prisma.trucks.findMany({ where: { available } });

    return { count: res.length, results: res };
  } catch (err) {
    if (err instanceof AppError) {
      throw new AppError(err.statusCode, err.message, err.name);
    }
  }
};

export default queryTrucksAvailabilityService;
