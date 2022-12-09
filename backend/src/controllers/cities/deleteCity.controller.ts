import deleteCityService from "../../services/cities/deleteCity.service";
import { AppError, handleError } from "../../errors";
import { Request, Response } from "express";

const deleteCityController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const city = await deleteCityService(Number(id));

    return res.status(200).send({ message: "City Deleted.", results: city });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default deleteCityController;
