import { cityCreateSchema, cityUpdateSchema } from "../../schemas/cities/city.schema";
import { cityCreateValidator, cityUpdateValidator } from "../../validators/cities/city.validator";

import cityQueryController from "../../controllers/cities/city.query.controller";
import CityUpdateController from "../../controllers/cities/city.update.controller";
import cityCreateController from "../../controllers/cities/city.create.controller";
import cityDeleteController from "../../controllers/cities/city.delete.controller";
import cityGetAllController from "../../controllers/cities/city.getAll.controller";
import cityGetByIDController from "../../controllers/cities/city.getByID.controller";

import verifyAuthTokenMiddleware from "../../middlewares/verify.token.middleware";
import verifyAdmMiddleware from "../../middlewares/verify.adm.middleware";

import { Router } from "express";

const router = Router();

router.post(
  "",
  verifyAuthTokenMiddleware,
  verifyAdmMiddleware,
  cityCreateValidator(cityCreateSchema),
  cityCreateController
);

router.get("/search", verifyAuthTokenMiddleware, cityQueryController);
router.get("/all", verifyAuthTokenMiddleware, cityGetAllController);
router.get("/:id", verifyAuthTokenMiddleware, cityGetByIDController);

router.patch(
  "/:id",
  verifyAuthTokenMiddleware,
  verifyAdmMiddleware,
  cityUpdateValidator(cityUpdateSchema),
  CityUpdateController
);

router.delete("/:id", verifyAuthTokenMiddleware, verifyAdmMiddleware, cityDeleteController);

export default router;
