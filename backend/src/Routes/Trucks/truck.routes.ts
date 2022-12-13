import { truckCreateSchema, truckUpdateSchema } from "../../schemas/trucks/truck.schema";
import { truckCreateValidator, truckUpdateValidator } from "../../validators/trucks/truck.validator";

import truckQueryController from "../../controllers/trucks/truck.query.controller";
import truckCreateController from "../../controllers/trucks/truck.create.controller";
import truckDeleteController from "../../controllers/trucks/truck.delete.controller";
import truckGetAllController from "../../controllers/trucks/truck.getAll.controller";
import truckUpdateController from "../../controllers/trucks/truck.update.controller";
import truckGetByIDController from "../../controllers/trucks/truck.getByID.controller";

import verifyAuthTokenMiddleware from "../../middlewares/verify.token.middleware";

import { Router } from "express";

const router = Router();

router.post("", verifyAuthTokenMiddleware, truckCreateValidator(truckCreateSchema), truckCreateController);

router.get("/all", verifyAuthTokenMiddleware, truckGetAllController);
router.get("/search", verifyAuthTokenMiddleware, truckQueryController);
router.get("/:id", verifyAuthTokenMiddleware, truckGetByIDController);

router.patch("/:id", verifyAuthTokenMiddleware, truckUpdateValidator(truckUpdateSchema), truckUpdateController);

router.delete("/:id", verifyAuthTokenMiddleware, truckDeleteController);

export default router;
