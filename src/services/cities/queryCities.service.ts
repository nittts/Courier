import { ICityQuerySearch } from "../../interfaces/Cities/city.types";
import prisma from "../../database/Prisma/database";
import { AppError } from "../../errors";

const queryCitiesService = async (queries: ICityQuerySearch) => {
  try {
    const isQueryEmpty = Object.values(queries).every((key) => typeof key === "undefined");

    if (isQueryEmpty) {
      throw new AppError(400, "No Param nor Query was provided.", "Bad Request");
    }

    const res = await prisma.cities.findMany({
      where: {
        OR: [{ name: queries.name }, { postcode: queries.postcode }],
      },
    });

    return { count: res.length, results: res };
  } catch (err) {
    if (err instanceof AppError) {
      throw new AppError(err.statusCode, err.message, err.status);
    }
  }
};

export default queryCitiesService;
