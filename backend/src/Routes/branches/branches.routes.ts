import getSingleBranchController from "../../controllers/branches/getSingleBranch.controller";
import getUserBranchController from "../../controllers/branches/getUserBranch.controller";
import queryBranchesController from "../../controllers/branches/queryBranches.controller";
import createBranchController from "../../controllers/branches/createBranch.controller";
import deleteBranchController from "../../controllers/branches/deleteBranch.controller";
import updateBranchController from "../../controllers/branches/updateBranch.controller";
import getBranchesController from "../../controllers/branches/getBranches.controller";

import verifyAuthTokenMiddleware from "../../middlewares/verifyToken.middleware";
import verifyAdmMiddleware from "../../middlewares/verifyUser.middleware";

import { Router } from "express";

const router = Router();

router.get("", verifyAuthTokenMiddleware, queryBranchesController);
router.get("/all", verifyAuthTokenMiddleware, verifyAdmMiddleware, getBranchesController);
router.get("/here", verifyAuthTokenMiddleware, getUserBranchController);
router.get("/:id", verifyAuthTokenMiddleware, getSingleBranchController);
router.post("/", verifyAuthTokenMiddleware, verifyAdmMiddleware, createBranchController);
router.patch("/:id", verifyAuthTokenMiddleware, verifyAdmMiddleware, updateBranchController);
router.delete("/:id", verifyAuthTokenMiddleware, verifyAdmMiddleware, deleteBranchController);

export default router;
