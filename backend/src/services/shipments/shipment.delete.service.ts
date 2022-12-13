import { AppError } from "../../errors";
import { Prisma } from "@prisma/client";
import prisma from "../../database/database";

const shipmentDeleteService = async (id: string) => {
  try {
    const res = await prisma.shipments
      .delete({
        where: { id },
        include: { truck: true, users: { select: { name: true } } },
      })
      .catch((err) => {
        throw new Prisma.PrismaClientKnownRequestError(err.message, {
          code: err.code,
          clientVersion: "4.7.1",
          meta: err.meta,
        });
      });

    if (!res) {
      throw new AppError(404, "Shipment not Found.", "Not found");
    }

    return { message: "Shipment deleted with success", results: res };
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

export default shipmentDeleteService;
