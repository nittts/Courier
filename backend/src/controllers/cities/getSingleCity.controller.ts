import getSingleCityService from "../../services/cities/getSingleCity.service";
import { AppError, handleError } from "../../errors";
import { Request, Response } from "express";

const getSingleCityController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const city = await getSingleCityService(Number(id));

    return res.status(200).send({ message: "Success.", city });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default getSingleCityController;
