import getShipmentsByStatusService from "../../services/shipments/getShipmentByStatus.service";
import { Request, Response } from "express";
import { AppError, handleError } from "../../errors";

const getShipmentsByStatusController = async (req: Request, res: Response) => {
  const { status } = req.params;

  try {
    const shipments = await getShipmentsByStatusService(status);

    return res.status(200).send({ message: "Success.", ...shipments });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default getShipmentsByStatusController;
