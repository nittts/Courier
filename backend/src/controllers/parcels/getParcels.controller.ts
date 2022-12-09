import getParcelsService from "../../services/parcels/getParcels.service";
import { Request, Response } from "express";
import { handleError, AppError } from "../../errors";

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
