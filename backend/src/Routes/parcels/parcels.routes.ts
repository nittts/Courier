import { Router } from "express";
import createParcelController from "../../controllers/parcels/createParcel.controller";
import deleteParcelController from "../../controllers/parcels/deleteParcel.controller";
import getParcelsController from "../../controllers/parcels/getParcels.controller";
import getSingleParcelController from "../../controllers/parcels/getSingleParcel.controller";
import queryParcelsController from "../../controllers/parcels/queryParcels.controller";
import queryParcelsByWeightController from "../../controllers/parcels/queryParcelsByWeight.controller";
import updateParcelController from "../../controllers/parcels/updateParcel.controller";

import verifyAuthTokenMiddleware from "../../middlewares/verifyToken.middleware";

const router = Router();

router.get("", verifyAuthTokenMiddleware, queryParcelsController);
router.get("/all", verifyAuthTokenMiddleware, getParcelsController);
router.get("/weight", verifyAuthTokenMiddleware, queryParcelsByWeightController);
router.get("/:id", verifyAuthTokenMiddleware, getSingleParcelController);
router.post("/", verifyAuthTokenMiddleware, createParcelController);
router.patch("/:id", verifyAuthTokenMiddleware, updateParcelController);
router.delete("/:id", verifyAuthTokenMiddleware, deleteParcelController);

export default router;
