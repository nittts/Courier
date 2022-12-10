import getSingleTruckService from "../../services/trucks/getSingleTruck.service";
import { AppError, handleError } from "../../errors";
import { Request, Response } from "express";

const getSingleTruckController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const Truck = await getSingleTruckService(Number(id));

    return res.status(200).send({ message: "Success.", results: Truck });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default getSingleTruckController;
