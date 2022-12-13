import { AppError } from "../../errors";
import { Prisma } from "@prisma/client";
import prisma from "../../database/database";
import { IShipmentUpdate } from "../../interfaces/shipments/shipment.types";

const shipmentUpdateService = async (id: string, data: IShipmentUpdate) => {
  try {
    const res = await prisma.shipments
      .update({
        where: { id },
        data,
      })
      .catch((err) => {
        throw new Prisma.PrismaClientKnownRequestError(err.message, {
          code: err.code,
          clientVersion: "4.7.1",
          meta: err.meta,
        });
      });

    return { message: "Shipment Updated with success.", results: res };
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

export default shipmentUpdateService;
