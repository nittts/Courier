import getTrucksService from "../../services/trucks/getTrucks.service";
import { Request, Response } from "express";
import { AppError, handleError } from "../../errors";

const getTrucksController = async (req: Request, res: Response) => {
  try {
    const Trucks = await getTrucksService();

    return res.status(200).send({ message: "Success.", ...Trucks });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default getTrucksController;
