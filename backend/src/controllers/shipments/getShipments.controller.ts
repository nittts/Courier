import getShipmentsService from "../../services/shipments/getShipments.service";
import { AppError, handleError } from "../../errors";
import { Request, Response } from "express";

const getShipmentsController = async (req: Request, res: Response) => {
  try {
    const shipments = await getShipmentsService();

    return res.status(200).send({ message: "Success.", ...shipments });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default getShipmentsController;
