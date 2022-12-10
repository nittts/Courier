import { Router } from "express";
import createTruckController from "../../controllers/trucks/createTruck.controller";
import deleteTruckController from "../../controllers/trucks/deleteTruck.controller";
import getSingleTruckController from "../../controllers/trucks/getSingleTruck.controller";
import getTrucksController from "../../controllers/trucks/getTrucks.controller";
import queryTrucksAvailabilityController from "../../controllers/trucks/queryTrucksAvailability.controller";
import updateTruckController from "../../controllers/trucks/updateTruck.controller";

const router = Router();

router.get("/all", getTrucksController);
router.get("/:id", getSingleTruckController);
router.post("/", createTruckController);
router.get("/status/:available", queryTrucksAvailabilityController);
router.patch("/:id", updateTruckController);
router.delete("/:id", deleteTruckController);

export default router;
