import { IParcelCreate } from "../../interfaces/Parcels/parcel.types";
import prisma from "../../database/Prisma/database";
import { AppError } from "../../errors";
import { v4 as uuid } from "uuid";

const createParcelService = async (data: IParcelCreate) => {
  try {
    const missingValues = Object.entries(data).find((item) => typeof item[1] === "undefined");

    if (missingValues && missingValues?.length > 0) {
      throw new AppError(400, `${missingValues[0]} field is Required.`, "Bad Request");
    }

    const newParcel = {
      ...data,
      id: uuid(),
      admission_date: new Date(),
    };

    const res = await prisma.parcels.create({ data: newParcel });

    return res;
  } catch (err) {
    if (err instanceof AppError) {
      console.log(err);
      throw new AppError(err.statusCode, err.message, err.name);
    }
  }
};

export default createParcelService;
