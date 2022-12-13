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

import verifyAuthTokenMiddleware from "../../middlewares/verify.token.middleware";

import { Router } from "express";

const router = Router();

router.post("", verifyAuthTokenMiddleware, productCreateValidator(productCreateSchema), productCreateController);

router.get("/all", verifyAuthTokenMiddleware, productGetAllController);
router.get("/search", verifyAuthTokenMiddleware, productQueryController);
router.get("/:id", verifyAuthTokenMiddleware, productGetByIDController);

router.patch(
  "/bulk",
  verifyAuthTokenMiddleware,
  productUpdateBulkValidator(productUpdateBulkSchema),
  productUpdateBulkController
);
router.patch(
  "/:id",
  verifyAuthTokenMiddleware,
  productUpdateValidator(productUpdateSchema),
  productUpdateSingleController
);

router.delete("/bulk", verifyAuthTokenMiddleware, productDeleteBulkController);
router.delete("/:id", verifyAuthTokenMiddleware, productDeleteSingleController);

export default router;
