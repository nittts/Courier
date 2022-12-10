import createShipmentService from "../../services/shipments/createShipment.service";
import { IShipmentCreate } from "../../interfaces/Shipments/shipment.types";
import { AppError, handleError } from "../../errors";
import { Request, Response } from "express";
import { v4 as uuid } from "uuid";

const createShipmentController = async (req: Request, res: Response) => {
  const {
    status,
    departure_time,
    arrival_time,
    weight,
    truck_id,
    driver_id,
    destination_branch,
    departure_branch,
    parcel_id,
  } = req.body;

  const { shipment_id } = req.params;

  try {
    const Shipment = {
      id: shipment_id || uuid(),
      status,
      arrival_time: arrival_time || null,
      departure_time: departure_time || new Date(),
      weight,
      truck_id,
      driver_id,
      destination_branch,
      departure_branch,
      parcel_id: parcel_id || null,
    } as IShipmentCreate;

    const newShipment = await createShipmentService(Shipment);

    return res.status(201).send({ message: "Shipment Created.", results: newShipment });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default createShipmentController;
