import { cityCreateSchema, cityUpdateSchema } from "../../schemas/cities/city.schema";
import { cityCreateValidator, cityUpdateValidator } from "../../validators/cities/city.validator";

import cityQueryController from "../../controllers/cities/city.query.controller";
import CityUpdateController from "../../controllers/cities/city.update.controller";
import cityCreateController from "../../controllers/cities/city.create.controller";
import cityDeleteController from "../../controllers/cities/city.delete.controller";
import cityGetAllController from "../../controllers/cities/city.getAll.controller";
import cityGetByIDController from "../../controllers/cities/city.getByID.controller";

import { Router } from "express";

const router = Router();

router.post("", cityCreateValidator(cityCreateSchema), cityCreateController);

router.get("/search", cityQueryController);
router.get("/all", cityGetAllController);
router.get("/:id", cityGetByIDController);

router.patch("/:id", cityUpdateValidator(cityUpdateSchema), CityUpdateController);

router.delete("/:id", cityDeleteController);

export default router;
