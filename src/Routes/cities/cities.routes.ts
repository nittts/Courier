import getSingleCityController from "../../controllers/cities/getSingleCity.controller";
import queryCitiesController from "../../controllers/cities/queryCities.controller";
import createCityController from "../../controllers/cities/createCity.controller";
import updateCityController from "../../controllers/cities/updateCity.controller";
import deleteCityController from "../../controllers/cities/deleteCity.controller";
import getCitiesController from "../../controllers/cities/getCities.controller";

import { Router } from "express";

const router = Router();

router.get("", queryCitiesController);
router.get("/all", getCitiesController);
router.get("/:id", getSingleCityController);
router.patch("/:id", updateCityController);
router.post("/", createCityController);
router.delete("/:id", deleteCityController);

export default router;
