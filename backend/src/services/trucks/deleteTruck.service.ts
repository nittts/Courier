import prisma from "../../database/Prisma/database";
import { AppError } from "../../errors";

const deleteTruckService = async (id: number) => {
  try {
    const findTruck = await prisma.trucks.findFirst({ where: { id } });

    if (findTruck === null) {
      throw new AppError(404, "Truck not Found.", "Not Found");
    }

    const res = await prisma.trucks.delete({ where: { id } });

    return res;
  } catch (err) {
    if (err instanceof AppError) {
      throw new AppError(err.statusCode, err.message, err.name);
    }
  }
};

export default deleteTruckService;
