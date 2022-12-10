import getParcelsService from "../../services/parcels/getParcels.service";
import { handleError, AppError } from "../../errors";
import { Request, Response } from "express";

const getParcelsController = async (req: Request, res: Response) => {
  try {
    const parcels = await getParcelsService();

    return res.status(200).send({ message: "Success.", ...parcels });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default getParcelsController;
