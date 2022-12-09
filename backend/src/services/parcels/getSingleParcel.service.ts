import prisma from "../../database/Prisma/database";
import { AppError } from "../../errors";

const getSingleParcelService = async (id: string) => {
  try {
    const res = await prisma.parcels.findFirst({ where: { id } });

    if (!res) {
      throw new AppError(404, "Parcel not Found.", "Not Found");
    }

    return res;
  } catch (err) {
    if (err instanceof AppError) {
      throw new AppError(err.statusCode, err.message, err.status);
    }
  }
};

export default getSingleParcelService;
