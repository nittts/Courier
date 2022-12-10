import { Request, Response } from "express";
import { AppError, handleError } from "../../errors";
import getShipmentByDriverService from "../../services/shipments/getShipmentByDriver.service";
import { IShipmentDriverSearch } from "../../interfaces/Shipments/shipment.types";

const getShipmentByDriverController = async (req: Request, res: Response) => {
  const { id, name } = req.query;

  try {
    const shipment = await getShipmentByDriverService({ id, name } as IShipmentDriverSearch);

    return res.status(200).send({ message: "Success.", ...shipment });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default getShipmentByDriverController;
