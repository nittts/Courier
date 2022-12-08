import getSingleBranchController from "../../controllers/branches/getSingleBranch.controller";
import getUserBranchController from "../../controllers/branches/getUserBranch.controller";
import queryBranchesController from "../../controllers/branches/queryBranches.controller";
import createBranchController from "../../controllers/branches/createBranch.controller";
import deleteBranchController from "../../controllers/branches/deleteBranch.controller";
import updateBranchController from "../../controllers/branches/updateBranch.controller";
import getBranchesController from "../../controllers/branches/getBranches.controller";

import { Router } from "express";

const router = Router();

router.get("", queryBranchesController);
router.get("/all", getBranchesController);
router.get("/here", getUserBranchController);
router.get("/:id", getSingleBranchController);
router.post("/", createBranchController);
router.patch("/:id", updateBranchController);
router.delete("/:id", deleteBranchController);

export default router;
