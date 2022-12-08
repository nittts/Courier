import getBranchesService from "../../services/branches/getBranches.service";
import { AppError, handleError } from "../../errors";
import { Request, Response } from "express";

const getBranchesController = async (req: Request, res: Response) => {
  try {
    const branches = await getBranchesService();

    return res.status(200).send({ message: "Success.", ...branches });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default getBranchesController;
