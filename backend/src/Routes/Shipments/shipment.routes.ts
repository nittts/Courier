import { Router } from "express";

import shipmentCreateController from "../../controllers/shipments/shipment.create.controller";
import shipmentDeleteController from "../../controllers/shipments/shipment.delete.controller";
import shipmentGetAllController from "../../controllers/shipments/shipment.getAll.controller";
import shipmentGetByIDController from "../../controllers/shipments/shipment.getByID.controller";
import shipmentQueryController from "../../controllers/shipments/shipment.query.controller";
import shipmentUpdateController from "../../controllers/shipments/shipment.update.controller";
import { shipmentCreateSchema, shipmentUpdateSchema } from "../../schemas/shipments/shipment.schema";
import { shipmentCreateValidator, shipmentUpdateValidator } from "../../validators/shipments/shipment.validator";

const router = Router();

router.post("", shipmentCreateValidator(shipmentCreateSchema), shipmentCreateController);

router.get("/search", shipmentQueryController);
router.get("/all", shipmentGetAllController);
router.get("/:id", shipmentGetByIDController);

router.patch("/:id", shipmentUpdateValidator(shipmentUpdateSchema), shipmentUpdateController);

router.delete("/:id", shipmentDeleteController);

export default router;
