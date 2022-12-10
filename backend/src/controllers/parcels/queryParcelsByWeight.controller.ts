import queryParcelsByWeightService from "../../services/parcels/queryParcelsByWeight.service";
import { IParcelWeight } from "../../interfaces/Parcels/parcel.types";
import { AppError, handleError } from "../../errors";
import { Request, Response } from "express";

const queryParcelsByWeightController = async (req: Request, res: Response) => {
  const {
    query: { max, min },
  } = req;

  try {
    const parcels = await queryParcelsByWeightService({ max: Number(max), min: Number(min) } as IParcelWeight);

    return res.status(200).send({ message: "Success.", ...parcels });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default queryParcelsByWeightController;
