import {
  productCreateSchema,
  productUpdateBulkSchema,
  productUpdateSchema,
} from "../../schemas/products/product.schema";
import {
  productCreateValidator,
  productUpdateBulkValidator,
  productUpdateValidator,
} from "../../validators/products/product.validator";

import productQueryController from "../../controllers/products/product.query.controller";
import productGetAllController from "../../controllers/products/product.getAll.controller";
import productCreateController from "../../controllers/products/product.create.controller";
import productGetByIDController from "../../controllers/products/product.getByID.controller";
import productUpdateBulkController from "../../controllers/products/product.updateBulk.controller";
import productDeleteBulkController from "../../controllers/products/product.deleteBulk.controller";
import productDeleteSingleController from "../../controllers/products/product.deleteSingle.controller";
import productUpdateSingleController from "../../controllers/products/product.updateSingle.controller";

import { Router } from "express";

const router = Router();

router.post("", productCreateValidator(productCreateSchema), productCreateController);

router.get("/all", productGetAllController);
router.get("/search", productQueryController);
router.get("/:id", productGetByIDController);

router.patch("/bulk", productUpdateBulkValidator(productUpdateBulkSchema), productUpdateBulkController);
router.patch("/:id", productUpdateValidator(productUpdateSchema), productUpdateSingleController);

router.delete("/bulk", productDeleteBulkController);
router.delete("/:id", productDeleteSingleController);

export default router;
