import createBranchService from "../../services/branches/createBranch.service";
import { AppError, handleError } from "../../errors";
import { Request, Response } from "express";

const createBranchController = async (req: Request, res: Response) => {
  try {
    const newCity = await createBranchService(req.body);

    return res.status(201).send({ message: "Branch Created.", results: newCity });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};
export default createBranchController;
