import prisma from "../../database/database";
import { AppError } from "../../errors";

const getTrucksService = async () => {
  try {
    const res = await prisma.trucks.findMany();

    return { count: res.length, results: res };
  } catch (err) {
    if (err instanceof AppError) {
      throw new AppError(err.statusCode, err.message, err.name);
    }
  }
};

export default getTrucksService;
