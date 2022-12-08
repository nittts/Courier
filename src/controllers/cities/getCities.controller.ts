import getCitiesService from "../../services/cities/getCities.service";
import { AppError, handleError } from "../../errors";
import { Request, Response } from "express";

const getCitiesController = async (req: Request, res: Response) => {
  try {
    const cities = await getCitiesService();

    return res.status(200).send({ message: "Success.", ...cities });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default getCitiesController;
