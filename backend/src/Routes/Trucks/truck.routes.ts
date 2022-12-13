import { Router } from "express";
import truckCreateController from "../../controllers/trucks/truck.create.controller";
import truckDeleteController from "../../controllers/trucks/truck.delete.controller";
import truckGetAllController from "../../controllers/trucks/truck.getAll.controller";
import truckGetByIDController from "../../controllers/trucks/truck.getByID.controller";
import truckQueryController from "../../controllers/trucks/truck.query.controller";
import truckUpdateController from "../../controllers/trucks/truck.update.controller";
import { truckCreateSchema, truckUpdateSchema } from "../../schemas/trucks/truck.schema";
import { truckCreateValidator, truckUpdateValidator } from "../../validators/trucks/truck.validator";

const router = Router();

router.post("", truckCreateValidator(truckCreateSchema), truckCreateController);

router.get("/all", truckGetAllController);
router.get("/search", truckQueryController);
router.get("/:id", truckGetByIDController);

router.patch("/:id", truckUpdateValidator(truckUpdateSchema), truckUpdateController);

router.delete("/:id", truckDeleteController);

export default router;
