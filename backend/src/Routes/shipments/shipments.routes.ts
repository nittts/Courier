import getShipmentsByStatusController from "../../controllers/shipments/getShipmentByStatus.controller";
import getShipmentByDriverController from "../../controllers/shipments/getShipmentByDriver.controller";
import getSingleShipmentController from "../../controllers/shipments/getSingleShipment.controller";
import createShipmentController from "../../controllers/shipments/createShipment.controller";
import deleteShipmentController from "../../controllers/shipments/deleteShipment.controller";
import updateShipmentController from "../../controllers/shipments/updateShipment.controller";
import getShipmentsController from "../../controllers/shipments/getShipments.controller";

import verifyAuthTokenMiddleware from "../../middlewares/verifyToken.middleware";

import { Router } from "express";

const router = Router();

router.get("/all", verifyAuthTokenMiddleware, getShipmentsController);
router.get("/:id", verifyAuthTokenMiddleware, getSingleShipmentController);
router.get("/status/:status", verifyAuthTokenMiddleware, getShipmentsByStatusController);
router.get("/driver", verifyAuthTokenMiddleware, getShipmentByDriverController);

router.post("/", verifyAuthTokenMiddleware, createShipmentController);

router.patch("/:id", verifyAuthTokenMiddleware, updateShipmentController);

router.delete("/:id", verifyAuthTokenMiddleware, deleteShipmentController);

export default router;
