import updateTruckService from "../../services/trucks/updateTruck.service";
import { AppError, handleError } from "../../errors";
import { Request, Response } from "express";

const updateTruckController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const data = {
      id,
      ...req.body,
    };

    const updatedTruck = await updateTruckService(data);

    return res.status(200).send({ message: "Truck Updated.", results: updatedTruck });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default updateTruckController;
