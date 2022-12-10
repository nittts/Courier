import queryParcelsService from "../../services/parcels/queryParcels.service";
import { IParcelQuerySearch } from "../../interfaces/Parcels/parcel.types";
import { AppError, handleError } from "../../errors";
import { Request, Response } from "express";

const queryParcelsController = async (req: Request, res: Response) => {
  const {
    query: { name, client_id, shipment_id },
  } = req;

  try {
    const parcels = await queryParcelsService({ name, client_id, shipment_id } as IParcelQuerySearch);

    return res.status(200).send({ message: "Success.", ...parcels });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default queryParcelsController;
