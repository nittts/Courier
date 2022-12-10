import { Router } from "express";
import createTruckController from "../../controllers/trucks/createTruck.controller";
import deleteTruckController from "../../controllers/trucks/deleteTruck.controller";
import getSingleTruckController from "../../controllers/trucks/getSingleTruck.controller";
import getTrucksController from "../../controllers/trucks/getTrucks.controller";
import queryTrucksAvailabilityController from "../../controllers/trucks/queryTrucksAvailability.controller";
import updateTruckController from "../../controllers/trucks/updateTruck.controller";

import verifyAuthTokenMiddleware from "../../middlewares/verifyToken.middleware";
import verifyAdmMiddleware from "../../middlewares/verifyUser.middleware";

const router = Router();

router.get("/all", verifyAuthTokenMiddleware, verifyAdmMiddleware, getTrucksController);
router.get("/:id", verifyAuthTokenMiddleware, getSingleTruckController);
router.post("/", verifyAuthTokenMiddleware, verifyAdmMiddleware, createTruckController);
router.get("/status/:available", queryTrucksAvailabilityController);
router.patch("/:id", verifyAuthTokenMiddleware, updateTruckController);
router.delete("/:id", verifyAuthTokenMiddleware, verifyAdmMiddleware, deleteTruckController);

export default router;
