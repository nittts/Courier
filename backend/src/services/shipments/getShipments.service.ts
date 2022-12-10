import prisma from "../../database/Prisma/database";
import { AppError } from "../../errors";

const getShipmentsService = async () => {
  try {
    const res = await prisma.shipments.findMany();

    return { count: res.length, results: res };
  } catch (err) {
    if (err instanceof AppError) {
      console.log(err);
      throw new AppError(err.statusCode, err.message, err.name);
    }
  }
};

export default getShipmentsService;
