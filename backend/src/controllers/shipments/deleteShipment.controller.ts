import deleteShipmentService from "../../services/shipments/deleteShipment.service";
import { AppError, handleError } from "../../errors";
import { Request, Response } from "express";

const deleteShipmentController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const Shipment = await deleteShipmentService(id);

    return res.status(200).send({ message: "Shipment Deleted.", results: Shipment });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default deleteShipmentController;
