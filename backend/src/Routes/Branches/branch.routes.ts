import { Router } from "express";
import branchCreateController from "../../controllers/branches/branch.create.controller";
import branchDeleteController from "../../controllers/branches/branch.delete.controller";
import branchGetAllController from "../../controllers/branches/branch.getAll.controller";
import branchGetByIDController from "../../controllers/branches/branch.getByID.controller";
import branchQueryController from "../../controllers/branches/branch.query.controller";
import branchUpdateController from "../../controllers/branches/branch.update.controller";
import { branchCreateSchema, branchUpdateSchema } from "../../schemas/branches/branch.schema";
import { branchCreateValidator, branchUpdateValidator } from "../../validators/branches/branch.validator";

const router = Router();

router.post("", branchCreateValidator(branchCreateSchema), branchCreateController);

router.get("/all", branchGetAllController);
router.get("/search", branchQueryController);
router.get("/:id", branchGetByIDController);

router.patch("/:id", branchUpdateValidator(branchUpdateSchema), branchUpdateController);

router.delete("/:id", branchDeleteController);
export default router;
