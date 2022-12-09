import prisma from "../../database/Prisma/database";
import { AppError } from "../../errors";
import { IParcelWeight } from "../../interfaces/Parcels/parcel.types";

const queryParcelsByWeightService = async ({ max, min }: IParcelWeight) => {
  try {
    const res = await prisma.parcels.findMany({
      where: {
        OR: [{ volume_weight: { gt: min } }, { volume_weight: { lt: max } }],
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
