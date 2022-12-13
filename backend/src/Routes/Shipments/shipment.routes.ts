import { shipmentCreateSchema, shipmentUpdateSchema } from "../../schemas/shipments/shipment.schema";
import { shipmentCreateValidator, shipmentUpdateValidator } from "../../validators/shipments/shipment.validator";

import shipmentQueryController from "../../controllers/shipments/shipment.query.controller";
import shipmentCreateController from "../../controllers/shipments/shipment.create.controller";
import shipmentUpdateController from "../../controllers/shipments/shipment.update.controller";
import shipmentDeleteController from "../../controllers/shipments/shipment.delete.controller";
import shipmentGetAllController from "../../controllers/shipments/shipment.getAll.controller";
import shipmentGetByIDController from "../../controllers/shipments/shipment.getByID.controller";

import verifyAuthTokenMiddleware from "../../middlewares/verify.token.middleware";

import { Router } from "express";

const router = Router();

router.post("", verifyAuthTokenMiddleware, shipmentCreateValidator(shipmentCreateSchema), shipmentCreateController);

router.get("/all", verifyAuthTokenMiddleware, shipmentGetAllController);
router.get("/search", verifyAuthTokenMiddleware, shipmentQueryController);
router.get("/:id", verifyAuthTokenMiddleware, shipmentGetByIDController);

router.patch(
  "/:id",
  verifyAuthTokenMiddleware,
  shipmentUpdateValidator(shipmentUpdateSchema),
  shipmentUpdateController
);

router.delete("/:id", verifyAuthTokenMiddleware, shipmentDeleteController);

export default router;
