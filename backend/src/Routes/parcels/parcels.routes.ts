import { Router } from "express";
import createParcelController from "../../controllers/parcels/createParcel.controller";
import deleteParcelController from "../../controllers/parcels/deleteParcel.controller";
import getParcelsController from "../../controllers/parcels/getParcels.controller";
import getSingleParcelController from "../../controllers/parcels/getSingleParcel.controller";
import queryParcelsController from "../../controllers/parcels/queryParcels.controller";
import queryParcelsByWeightController from "../../controllers/parcels/queryParcelsByWeight.controller";
import updateParcelController from "../../controllers/parcels/updateParcel.controller";

const router = Router();

router.get("", queryParcelsController);
router.get("/all", getParcelsController);
router.get("/weight", queryParcelsByWeightController);
router.get("/:id", getSingleParcelController);
router.post("/", createParcelController);
router.patch("/:id", updateParcelController);
router.delete("/:id", deleteParcelController);

export default router;
