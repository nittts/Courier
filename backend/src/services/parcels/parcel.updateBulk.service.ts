import { AppError } from "../../errors";
import { Prisma } from "@prisma/client";
import prisma from "../../database/database";
import { IParcelUpdateBulk } from "../../interfaces/parcels/parcel.type";

const parcelUpdateBulkService = async (data: IParcelUpdateBulk[]) => {
  try {
    const res = await prisma
      .$transaction(data.map((parcel) => prisma.parcels.update({ where: { id: parcel.id }, data: parcel.data })))
      .catch((err) => {
        throw new Prisma.PrismaClientKnownRequestError(err.message, {
          code: err.code,
          clientVersion: "4.7.1",
          meta: err.meta,
        });
      });

    return { message: "Parcels updated with success.", results: res };
  } catch (err) {
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

export default parcelUpdateBulkService;
