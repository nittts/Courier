import prisma from "../../database/database";
import { AppError } from "../../errors";

const getShipmentsByStatusService = async (status: string) => {
  try {
    const res = await prisma.shipments.findMany({
      where: { status: status },
    });

    return { count: res.length, results: res };
  } catch (err) {
    if (err instanceof AppError) {
      console.log(err);
      throw new AppError(err.statusCode, err.message, err.name);
    }
  }
};

export default getShipmentsByStatusService;
