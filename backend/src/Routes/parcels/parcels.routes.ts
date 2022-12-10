import queryParcelsByWeightController from "../../controllers/parcels/queryParcelsByWeight.controller";
import getSingleParcelController from "../../controllers/parcels/getSingleParcel.controller";
import createParcelController from "../../controllers/parcels/createParcel.controller";
import deleteParcelController from "../../controllers/parcels/deleteParcel.controller";
import queryParcelsController from "../../controllers/parcels/queryParcels.controller";
import updateParcelController from "../../controllers/parcels/updateParcel.controller";
import getParcelsController from "../../controllers/parcels/getParcels.controller";

import verifyAuthTokenMiddleware from "../../middlewares/verifyToken.middleware";

import { Router } from "express";

const router = Router();

router.get("", verifyAuthTokenMiddleware, queryParcelsController);
router.get("/:id", verifyAuthTokenMiddleware, getSingleParcelController);
router.get("/all", verifyAuthTokenMiddleware, getParcelsController);
router.get("/weight", verifyAuthTokenMiddleware, queryParcelsByWeightController);

router.post("/", verifyAuthTokenMiddleware, createParcelController);

router.patch("/:id", verifyAuthTokenMiddleware, updateParcelController);

router.delete("/:id", verifyAuthTokenMiddleware, deleteParcelController);

export default router;
