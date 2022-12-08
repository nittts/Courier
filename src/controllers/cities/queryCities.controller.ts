import queryCitiesService from "../../services/cities/queryCities.service";
import { ICityQuerySearch } from "../../interfaces/Cities/city.types";
import { AppError, handleError } from "../../errors";
import { Request, Response } from "express";

const queryCitiesController = async (req: Request, res: Response) => {
  const {
    query: { name, postcode },
  } = req;

  try {
    const cities = await queryCitiesService({ name, postcode } as ICityQuerySearch);

    return res.status(200).json({ message: "Success", ...cities });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default queryCitiesController;
