import { IParcelWeight } from "../../interfaces/Parcels/parcel.types";
import prisma from "../../database/database";
import { AppError } from "../../errors";

const queryParcelsByWeightService = async ({ max, min }: IParcelWeight) => {
  try {
    if (isNaN(max)) {
      max = Number.MAX_VALUE;
    }
    if (isNaN(min)) {
      min = 0;
    }

    const res = await prisma.parcels.findMany({
      where: {
        AND: [{ volume_weight: { gt: min } }, { volume_weight: { lt: max } }],
      },
    });

    return { count: res.length, results: res };
  } catch (err) {
    if (err instanceof AppError) {
      throw new AppError(err.statusCode, err.message, err.status);
    }
  }
};

export default queryParcelsByWeightService;
