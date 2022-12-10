import updateBranchService from "../../services/branches/updateBranch.service";
import { IBranchUpdate } from "../../interfaces/Branches/branch.types";
import { AppError, handleError } from "../../errors";
import { Request, Response } from "express";

const updateBranchController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const updatedBranch = await updateBranchService({
      id: Number(id),
      ...req.body,
    } as IBranchUpdate);

    return res.status(200).send({ message: "Branch Updated.", results: updatedBranch });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default updateBranchController;
