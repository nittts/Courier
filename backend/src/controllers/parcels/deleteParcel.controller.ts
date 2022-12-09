import deleteParcelService from "../../services/parcels/deleteParcel.service";
import { AppError, handleError } from "../../errors";
import { Request, Response } from "express";

const deleteParcelController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const Parcel = await deleteParcelService(id);

    return res.status(200).send({ message: "Parcel Deleted.", results: Parcel });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default deleteParcelController;
