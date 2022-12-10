import prisma from "../../database/database";
import { AppError } from "../../errors";

const getCitiesService = async () => {
  try {
    const res = await prisma.cities.findMany();

    return { count: res.length, results: res };
  } catch (err) {
    if (err instanceof AppError) {
      console.log(err);
      throw new AppError(err.statusCode, err.message, err.name);
    }
  }
};

export default getCitiesService;
