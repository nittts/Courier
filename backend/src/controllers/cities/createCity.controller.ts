import createCityService from "../../services/cities/createCity.service";
import { AppError, handleError } from "../../errors";
import { Request, Response } from "express";

const createCityController = async (req: Request, res: Response) => {
  const { name, postcode } = req.body;

  try {
    const city = await createCityService({ name, postcode });

    return res.status(201).send({ message: "City Created.", results: city });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default createCityController;
