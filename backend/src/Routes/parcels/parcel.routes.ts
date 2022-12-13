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

import { Router } from "express";

const router = Router();

router.post("", parcelCreateValidator(parcelCreateSchema), parcelCreateController);

router.get("/all", parcelGetAllController);
router.get("/search", parcelQueryController);
router.get("/:id", parcelGetByIDController);

router.patch("/bulk", parcelUpdateBulkValidator(parcelUpdateBulkSchema), parcelUpdateBulkController);
router.patch("/:id", parcelUpdateValidator(parcelUpdateSchema), parcelUpdateSingleController);

router.delete("/bulk", parcelDeleteBulkController);
router.delete("/:id", parcelDeleteSingleController);

export default router;
