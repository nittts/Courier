import queryTrucksAvailabilityService from "../../services/trucks/queryTrucksAvailabilty.service";
import { AppError, handleError } from "../../errors";
import { Request, Response } from "express";

const queryTrucksAvailabilityController = async (req: Request, res: Response) => {
  const { available } = req.params;

  try {
    const trucks = await queryTrucksAvailabilityService(Boolean(available));

    return res.status(200).send({ message: "Success.", ...trucks });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default queryTrucksAvailabilityController;
