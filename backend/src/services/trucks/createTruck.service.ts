import prisma from "../../database/Prisma/database";
import { AppError } from "../../errors";
import { ITruckCreate } from "../../interfaces/trucks/truck.types";

const createTruckService = async (data: ITruckCreate) => {
  try {
    const missingValues = Object.entries(data).find((item) => typeof item[1] === "undefined");

    if (missingValues && missingValues?.length > 0) {
      throw new AppError(400, `${missingValues[0]} field is Required.`, "Bad Request");
    }

    const res = await prisma.trucks.create({ data });

    return res;
  } catch (err) {
    if (err instanceof AppError) {
      console.log(err);
      throw new AppError(err.statusCode, err.message, err.name);
    }
  }
};

export default createTruckService;
