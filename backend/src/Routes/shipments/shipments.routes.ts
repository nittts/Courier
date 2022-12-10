import { Router } from "express";

import createShipmentController from "../../controllers/shipments/createShipment.controller";
import deleteShipmentController from "../../controllers/shipments/deleteShipment.controller";
import getShipmentByDriverController from "../../controllers/shipments/getShipmentByDriver.controller";
import getShipmentsByStatusController from "../../controllers/shipments/getShipmentByStatus.controller";
import getShipmentsController from "../../controllers/shipments/getShipments.controller";
import getSingleShipmentController from "../../controllers/shipments/getSingleShipment.controller";
import updateShipmentController from "../../controllers/shipments/updateShipment.controller";

const router = Router();

router.get("/all", getShipmentsController);
router.get("/:id", getSingleShipmentController);
router.get("/driver", getShipmentByDriverController);
router.get("/:status", getShipmentsByStatusController);
router.post("/", createShipmentController);
router.patch("/:id", updateShipmentController);
router.delete("/:id", deleteShipmentController);

export default router;
