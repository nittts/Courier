import prisma from "../../database/Prisma/database";
import { AppError } from "../../errors";

const deleteCityService = async (id: number) => {
  try {
    const findCity = await prisma.cities.findFirst({ where: { id } });

    if (!findCity) {
      throw new AppError(404, "City not Found.", "Not Found");
    }

    const res = await prisma.cities.delete({ where: { id } });

    return res;
  } catch (err) {
    if (err instanceof AppError) {
      throw new AppError(err.statusCode, err.message, err.name);
    }
  }
};

export default deleteCityService;
