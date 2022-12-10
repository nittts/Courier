import { AppError, handleError } from "../../errors";
import { Request, Response } from "express";
import updateShipmentService from "../../services/shipments/updateShipment.service";

const updateShipmentController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const data = {
      id,
      ...req.body,
    };

    const updatedShipment = await updateShipmentService(data);

    return res.status(200).send({ message: "Shipment Updated.", results: updatedShipment });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default updateShipmentController;
