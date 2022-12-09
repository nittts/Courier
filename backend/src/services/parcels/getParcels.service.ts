import prisma from "../../database/Prisma/database";
import { AppError } from "../../errors";

const getParcelsService = async () => {
  try {
    const res = await prisma.parcels.findMany();

    return { count: res.length, results: res };
  } catch (err) {
    if (err instanceof AppError) {
      console.log(err);
      throw new AppError(err.statusCode, err.message, err.name);
    }
  }
};

export default getParcelsService;
