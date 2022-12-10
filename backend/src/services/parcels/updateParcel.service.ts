import { IParcelUpdate } from "../../interfaces/Parcels/parcel.types";
import prisma from "../../database/database";
import { AppError } from "../../errors";

const updateParcelService = async (data: IParcelUpdate) => {
  const { id } = data;

  try {
    if (typeof id === "undefined") {
      throw new AppError(400, "Parcel id field Missing.", "Bad Request");
    }

    const parcelExists = await prisma.parcels.findFirst({ where: { id } });

    if (!parcelExists) {
      throw new AppError(404, "Parcel not Found.", "Not Found");
    }

    const res = await prisma.parcels.update({
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

export default updateParcelService;
