import createParcelService from "../../services/parcels/createParcel.service";
import { AppError, handleError } from "../../errors";
import { Request, Response } from "express";

const createParcelController = async (req: Request, res: Response) => {
  const { name, content, volume_weight, client_id, shipment_id } = req.body;

  try {
    const city = await createParcelService({ name, content, volume_weight, client_id, shipment_id });

    return res.status(201).send({ message: "City Created.", results: city });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default createParcelController;
