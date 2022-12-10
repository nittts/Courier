import createTruckService from "../../services/trucks/createTruck.service";
import { AppError, handleError } from "../../errors";
import { ITruckCreate } from "../../interfaces/trucks/truck.types";
import { Request, Response } from "express";

const createTruckController = async (req: Request, res: Response) => {
  const { license_plate, brand, max_weight, available, driver_id, branch_id } = req.body;

  try {
    const data = {
      license_plate,
      brand,
      max_weight,
      available: available || true,
      driver_id: driver_id || null,
      branch_id,
    } as ITruckCreate;

    const newTruck = await createTruckService(data);

    return res.status(201).send({ message: "Truck Created.", results: newTruck });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default createTruckController;
