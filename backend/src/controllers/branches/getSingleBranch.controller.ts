import getSingleBranchService from "../../services/branches/getSingleBranch.service";
import { AppError, handleError } from "../../errors";
import { Request, Response } from "express";

const getSingleBranchController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const branch = await getSingleBranchService(Number(id));

    return res.status(200).send({ message: "Success.", results: branch });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default getSingleBranchController;
