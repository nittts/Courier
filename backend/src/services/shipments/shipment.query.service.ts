import prisma from "../../database/database";
import { AppError } from "../../errors";
import { Prisma } from "@prisma/client";
import { IShipmentQueries } from "../../interfaces/shipments/shipment.types";

const shipmentQueryService = async (queries: IShipmentQueries) => {
  try {
    const emptyQuery = Object.entries(queries).every((entry) => {
      return typeof entry[1] === "undefined";
    });

    if (emptyQuery) {
      throw new AppError(400, "Query is empty.", "Bad Request");
    }

    const res = await prisma.shipments
      .findMany({
        where: {
          OR: [
            { shipment_number: queries.shipment_number },
            { status: queries.status },
            { weight: { equals: queries.weight } },
            { truck_id: queries.truck_id },
            { driver_id: queries.driver_id },
            { destination_branch: queries.destination_branch },
            { departure_branch: queries.departure_branch },
          ],
        },
      })
      .catch((err) => {
        throw new Prisma.PrismaClientKnownRequestError(err.message, {
          code: err.code,
          clientVersion: "4.7.1",
          meta: err.meta,
        });
      });

    if (res.length === 0) {
      throw new AppError(404, "Nothing was found.", "Not Found");
    }

    return { message: "Shipments Found.", results: res };
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

export default shipmentQueryService;
