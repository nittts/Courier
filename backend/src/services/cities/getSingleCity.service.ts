import prisma from "../../database/database";
import { AppError } from "../../errors";

const getSingleCityService = async (id: number) => {
  try {
    const res = await prisma.cities.findFirst({ where: { id } });

    if (!res) {
      throw new AppError(404, "City not Found.", "Not Found");
    }

    return res;
  } catch (err) {
    if (err instanceof AppError) {
      throw new AppError(err.statusCode, err.message, err.status);
    }
  }
};

export default getSingleCityService;
