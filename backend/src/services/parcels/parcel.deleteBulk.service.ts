import { AppError } from "../../errors";
import { Prisma } from "../../../prisma";
import prisma from "../../database/database";
import { IParcelDelete } from "../../interfaces/parcels/parcel.type";

const parcelDeleteBulkService = async (data: IParcelDelete[]) => {
  try {
    const res = await prisma
      .$transaction(data.map((parcel) => prisma.parcels.delete({ where: { id: parcel.id } })))
      .catch((err) => {
        throw new Prisma.PrismaClientKnownRequestError(err.message, {
          code: err.code,
          clientVersion: "4.7.1",
          meta: err.meta,
        });
      });

    return { message: "Parcels deleted with success.", results: res };
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

export default parcelDeleteBulkService;
