import { AppError, handleError } from "../../errors";
import { Request, Response } from "express";
import deleteTruckService from "../../services/trucks/deleteTruck.service";

const deleteTruckController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const Truck = await deleteTruckService(Number(id));

    return res.status(200).send({ message: "Truck Deleted.", results: Truck });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default deleteTruckController;
