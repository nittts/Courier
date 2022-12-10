import updateParcelService from "../../services/parcels/updateParcel.service";
import { IParcelUpdate } from "../../interfaces/Parcels/parcel.types";
import { AppError, handleError } from "../../errors";
import { Request, Response } from "express";

const updateParcelController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const updatedParcel = await updateParcelService({
      id,
      ...req.body,
    } as IParcelUpdate);

    return res.status(200).send({ message: "Parcel updated.", results: updatedParcel });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default updateParcelController;
