import getSingleParcelService from "../../services/parcels/getSingleParcel.service";
import { AppError, handleError } from "../../errors";
import { Request, Response } from "express";

const getSingleParcelController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const parcel = await getSingleParcelService(id);

    return res.status(200).send({ message: "Success.", results: parcel });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default getSingleParcelController;
