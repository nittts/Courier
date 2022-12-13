import { v4 as uuid } from "uuid";
import { AppError } from "../../errors";
import { Prisma } from "@prisma/client";
import prisma from "../../database/database";
import { IParcelCreate } from "../../interfaces/parcels/parcel.type";

const parcelCreateService = async (data: IParcelCreate) => {
  try {
    const res = await prisma.parcels
      .create({ data: { id: `PRC-${uuid()}`, admission_date: new Date(), ...data } })
      .catch((err) => {
        throw new Prisma.PrismaClientKnownRequestError(err.message, {
          code: err.code,
          clientVersion: "4.7.1",
          meta: err.meta,
        });
      });

    return { message: "Parcels created with success.", results: res };
  } catch (err) {
    console.log(err);

    if (err instanceof AppError) {
      throw new AppError(err.statusCode, err.message, err.status);
    }

    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      throw new Prisma.PrismaClientKnownRequestError(err.message, {
        code: err.code,
        clientVersion: "4.7.1",
        meta: err.meta,
      });
    }
  }
};

export default parcelCreateService;
