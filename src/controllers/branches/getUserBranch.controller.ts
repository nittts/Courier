import getUserBranchService from "../../services/branches/getUserBranch.service";
import { AppError, handleError } from "../../errors";
import { Request, Response } from "express";

const getUserBranchController = async (req: Request, res: Response) => {
  const { branch_id } = req.user;

  try {
    const branch = await getUserBranchService(branch_id);

    return res.status(200).send({ message: "Success.", results: branch });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default getUserBranchController;
