import { ICityUpdate } from "../../interfaces/Cities/city.types";
import prisma from "../../database/database";
import { AppError } from "../../errors";

const updateCityService = async (data: ICityUpdate) => {
  const { id } = data;

  try {
    if (typeof id === "undefined") {
      throw new AppError(400, "City id field Missing.", "Bad Request");
    }

    const cityExists = await prisma.cities.findFirst({ where: { id } });

    if (!cityExists) {
      throw new AppError(404, "City not Found.", "Not Found");
    }

    const res = await prisma.cities.update({
      where: { id },
      data,
    });

    return res;
  } catch (err) {
    if (err instanceof AppError) {
      throw new AppError(err.statusCode, err.message, err.status);
    }
  }
};

export default updateCityService;
