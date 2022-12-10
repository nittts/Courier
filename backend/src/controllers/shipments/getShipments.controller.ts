import getShipmentsService from "../../services/shipments/getShipments.service";
import { Request, Response } from "express";
import { AppError, handleError } from "../../errors";

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
