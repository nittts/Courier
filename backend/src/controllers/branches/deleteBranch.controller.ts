import deleteBranchService from "../../services/branches/deleteBranch.service";
import { handleError, AppError } from "../../errors";
import { Request, Response } from "express";

const deleteBranchController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deleted = await deleteBranchService(Number(id));

    return res.status(200).send({ message: "Branch deleted", results: deleted });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default deleteBranchController;
