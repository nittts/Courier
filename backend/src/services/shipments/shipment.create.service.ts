import prisma from "../../database/database";
import { Prisma } from "@prisma/client";
import { AppError } from "../../errors";
import { IShipment } from "../../interfaces/shipments/shipment.types";
import { v4 as uuid } from "uuid";

const shipmentCreateService = async (data: IShipment) => {
  try {
    const shipmentExists = await prisma.shipments.findFirst({ where: { shipment_number: data.shipment_number } });

    if (shipmentExists) {
      throw new AppError(401, "Shipment Already Exists.", "Unauthorized");
    }

    const res = await prisma.shipments
      .create({
        data: {
          ...data,
          id: `SPMT-${uuid()}`,
          departure_time: data.departure_time || new Date(),
          shipment_number: `S${uuid()}`,
        },
      })
      .catch((err) => {
        throw new Prisma.PrismaClientKnownRequestError(err.message, {
          code: err.code,
          clientVersion: "4.7.1",
          meta: err.meta,
        });
      });

    return { message: "Shipment created with success.", results: res };
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

export default shipmentCreateService;
