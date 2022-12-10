import queryTrucksAvailabilityController from "../../controllers/trucks/queryTrucksAvailability.controller";
import getSingleTruckController from "../../controllers/trucks/getSingleTruck.controller";
import updateTruckController from "../../controllers/trucks/updateTruck.controller";
import createTruckController from "../../controllers/trucks/createTruck.controller";
import deleteTruckController from "../../controllers/trucks/deleteTruck.controller";
import getTrucksController from "../../controllers/trucks/getTrucks.controller";

import verifyAuthTokenMiddleware from "../../middlewares/verifyToken.middleware";
import verifyAdmMiddleware from "../../middlewares/verifyUser.middleware";

import { Router } from "express";

const router = Router();

router.get("/:id", verifyAuthTokenMiddleware, getSingleTruckController);
router.get("/all", verifyAuthTokenMiddleware, verifyAdmMiddleware, getTrucksController);
router.get("/status/:available", queryTrucksAvailabilityController);

router.post("/", verifyAuthTokenMiddleware, verifyAdmMiddleware, createTruckController);

router.patch("/:id", verifyAuthTokenMiddleware, updateTruckController);

router.delete("/:id", verifyAuthTokenMiddleware, verifyAdmMiddleware, deleteTruckController);

export default router;
