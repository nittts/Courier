import { ICity } from "../../interfaces/Cities/city.types";
import prisma from "../../database/database";
import { AppError } from "../../errors";

const createCityService = async (data: ICity) => {
  try {
    const missingValues = Object.entries(data).find((item) => typeof item[1] === "undefined");

    if (missingValues && missingValues?.length > 0) {
      throw new AppError(400, `${missingValues[0]} field is Required.`, "Bad Request");
    }

    if (data.postcode.length > 12) {
      throw new AppError(400, "Invalid PostCode.", "Bad Request");
    }

    const alreadyExists = await prisma.cities.findFirst({ where: { name: data.name } });

    if (alreadyExists) {
      throw new AppError(400, "City Already Exists.", "Bad Request");
    }

    const res = await prisma.cities.create({ data });

    return res;
  } catch (err) {
    if (err instanceof AppError) {
      console.log(err);
      throw new AppError(err.statusCode, err.message, err.name);
    }
  }
};

export default createCityService;
