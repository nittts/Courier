import updateCityService from "../../services/cities/updateCity.service";
import { ICityUpdate } from "../../interfaces/Cities/city.types";
import { AppError, handleError } from "../../errors";
import { Request, Response } from "express";

const updateCityController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, postcode } = req.body;

  try {
    const updatedCity = await updateCityService({ id: Number(id), name, postcode } as ICityUpdate);

    return res.status(200).send({ message: "City updated.", results: updatedCity });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default updateCityController;
