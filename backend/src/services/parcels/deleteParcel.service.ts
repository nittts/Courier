import prisma from "../../database/database";
import { AppError } from "../../errors";

const deleteParcelService = async (id: string) => {
  try {
    const findParcel = await prisma.parcels.findFirst({ where: { id } });

    if (!findParcel) {
      throw new AppError(404, "Parcel not Found.", "Not Found");
    }

    const res = await prisma.parcels.delete({ where: { id } });

    return res;
  } catch (err) {
    if (err instanceof AppError) {
      throw new AppError(err.statusCode, err.message, err.name);
    }
  }
};

export default deleteParcelService;
