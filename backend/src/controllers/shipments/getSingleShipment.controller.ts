import getSingleShipmentService from "../../services/shipments/getSingleShipment.service";
import { AppError, handleError } from "../../errors";
import { Request, Response } from "express";

const getSingleShipmentController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const shipment = await getSingleShipmentService(id);

    return res.status(200).send({ message: "Success.", shipment });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default getSingleShipmentController;
