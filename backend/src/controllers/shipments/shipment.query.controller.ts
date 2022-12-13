import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { AppError, handleError, handlePrismaError } from "../../errors";
import { IShipmentQueries } from "../../interfaces/shipments/shipment.types";
import shipmentQueryService from "../../services/shipments/shipment.query.service";

const shipmentsQueryController = async (req: Request, res: Response) => {
  const { shipment_number, status, weight, truck_id, driver_id, destination_branch, departure_branch } = req.query;

  try {
    const serviceResponse = await shipmentQueryService({
      shipment_number,
      status,
      weight: weight ? Number(weight) : undefined,
      truck_id: truck_id ? Number(truck_id) : undefined,
      driver_id,
      destination_branch: destination_branch ? Number(destination_branch) : undefined,
      departure_branch: departure_branch ? Number(departure_branch) : undefined,
    } as IShipmentQueries);

    return res.status(200).send(serviceResponse);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      handlePrismaError(err, res);
    }
  }
};

export default shipmentsQueryController;
