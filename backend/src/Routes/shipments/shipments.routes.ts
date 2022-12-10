import { Router } from "express";

import createShipmentController from "../../controllers/shipments/createShipment.controller";
import deleteShipmentController from "../../controllers/shipments/deleteShipment.controller";
import getShipmentByDriverController from "../../controllers/shipments/getShipmentByDriver.controller";
import getShipmentsByStatusController from "../../controllers/shipments/getShipmentByStatus.controller";
import getShipmentsController from "../../controllers/shipments/getShipments.controller";
import getSingleShipmentController from "../../controllers/shipments/getSingleShipment.controller";
import updateShipmentController from "../../controllers/shipments/updateShipment.controller";
import verifyAuthTokenMiddleware from "../../middlewares/verifyToken.middleware";

const router = Router();

router.get("/all", verifyAuthTokenMiddleware, getShipmentsController);
router.get("/:id", verifyAuthTokenMiddleware, getSingleShipmentController);
router.get("/driver", verifyAuthTokenMiddleware, getShipmentByDriverController);
router.get("/:status", verifyAuthTokenMiddleware, getShipmentsByStatusController);
router.post("/", verifyAuthTokenMiddleware, createShipmentController);
router.patch("/:id", verifyAuthTokenMiddleware, updateShipmentController);
router.delete("/:id", verifyAuthTokenMiddleware, deleteShipmentController);

export default router;
