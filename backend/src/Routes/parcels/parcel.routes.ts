import { parcelCreateSchema, parcelUpdateBulkSchema, parcelUpdateSchema } from "../../schemas/parcels/parcel.schema";
import {
  parcelCreateValidator,
  parcelUpdateBulkValidator,
  parcelUpdateValidator,
} from "../../validators/parcels/parcel.validator";

import parcelQueryController from "../../controllers/parcels/parcel.query.controller";
import parcelGetAllController from "../../controllers/parcels/parcel.getAll.controller";
import parcelCreateController from "../../controllers/parcels/parcel.create.controller";
import parcelGetByIDController from "../../controllers/parcels/parcel.getByID.controller";
import parcelUpdateBulkController from "../../controllers/parcels/parcel.updateBulk.controller";
import parcelDeleteBulkController from "../../controllers/parcels/parcel.deleteBulk.controller";
import parcelUpdateSingleController from "../../controllers/parcels/parcel.updateSingle.controller";
import parcelDeleteSingleController from "../../controllers/parcels/parcel.deleteSingle.controller";

import verifyAuthTokenMiddleware from "../../middlewares/verify.token.middleware";

import { Router } from "express";

const router = Router();

router.post("", verifyAuthTokenMiddleware, parcelCreateValidator(parcelCreateSchema), parcelCreateController);

router.get("/all", verifyAuthTokenMiddleware, parcelGetAllController);
router.get("/search", verifyAuthTokenMiddleware, parcelQueryController);
router.get("/:id", verifyAuthTokenMiddleware, parcelGetByIDController);

router.patch(
  "/bulk",
  verifyAuthTokenMiddleware,
  parcelUpdateBulkValidator(parcelUpdateBulkSchema),
  parcelUpdateBulkController
);
router.patch(
  "/:id",
  verifyAuthTokenMiddleware,
  parcelUpdateValidator(parcelUpdateSchema),
  parcelUpdateSingleController
);

router.delete("/bulk", verifyAuthTokenMiddleware, parcelDeleteBulkController);
router.delete("/:id", verifyAuthTokenMiddleware, parcelDeleteSingleController);

export default router;
