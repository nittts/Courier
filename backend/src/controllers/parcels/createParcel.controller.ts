import createParcelService from "../../services/parcels/createParcel.service";
import { AppError, handleError } from "../../errors";
import { Request, Response } from "express";
import { v4 as uuid } from "uuid";
import { IParcelCreate } from "../../interfaces/Parcels/parcel.types";

const createParcelController = async (req: Request, res: Response) => {
  const { name, content, volume_weight, client_id, shipment_id } = req.body;

  try {
    const newParcel = {
      id: uuid(),
      admission_date: new Date(),
      name,
      content,
      volume_weight,
      client_id,
      shipment_id: shipment_id || null,
    } as IParcelCreate;

    const city = await createParcelService(newParcel);

    return res.status(201).send({ message: "Parcel Created.", results: city });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default createParcelController;
