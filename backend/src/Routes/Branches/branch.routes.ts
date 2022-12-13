import { branchCreateSchema, branchUpdateSchema } from "../../schemas/branches/branch.schema";
import { branchCreateValidator, branchUpdateValidator } from "../../validators/branches/branch.validator";

import branchQueryController from "../../controllers/branches/branch.query.controller";
import branchCreateController from "../../controllers/branches/branch.create.controller";
import branchDeleteController from "../../controllers/branches/branch.delete.controller";
import branchGetAllController from "../../controllers/branches/branch.getAll.controller";
import branchUpdateController from "../../controllers/branches/branch.update.controller";
import branchGetByIDController from "../../controllers/branches/branch.getByID.controller";

import verifyAuthTokenMiddleware from "../../middlewares/verify.token.middleware";
import verifyAdmMiddleware from "../../middlewares/verify.adm.middleware";

import { Router } from "express";

const router = Router();

router.post(
  "",
  verifyAuthTokenMiddleware,
  verifyAdmMiddleware,
  branchCreateValidator(branchCreateSchema),
  branchCreateController
);

router.get("/all", verifyAuthTokenMiddleware, verifyAdmMiddleware, branchGetAllController);
router.get("/search", verifyAuthTokenMiddleware, branchQueryController);
router.get("/:id", verifyAuthTokenMiddleware, branchGetByIDController);

router.patch(
  "/:id",
  verifyAuthTokenMiddleware,
  verifyAdmMiddleware,
  branchUpdateValidator(branchUpdateSchema),
  branchUpdateController
);

router.delete("/:id", verifyAuthTokenMiddleware, verifyAdmMiddleware, branchDeleteController);

export default router;
