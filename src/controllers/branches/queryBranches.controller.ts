import queryBranchesService from "../../services/branches/queryBranches.service";
import { IBranchQuery } from "../../interfaces/Branches/branch.types";
import { AppError, handleError } from "../../errors";
import { Request, Response } from "express";

const queryBranchesController = async (req: Request, res: Response) => {
  const {
    query: { name, city_id },
  } = req;

  try {
    const branches = await queryBranchesService({ name, city_id } as IBranchQuery);

    return res.status(200).send({ message: "Success.", ...branches });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default queryBranchesController;
