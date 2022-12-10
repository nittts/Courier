import getSingleCityController from "../../controllers/cities/getSingleCity.controller";
import queryCitiesController from "../../controllers/cities/queryCities.controller";
import createCityController from "../../controllers/cities/createCity.controller";
import updateCityController from "../../controllers/cities/updateCity.controller";
import deleteCityController from "../../controllers/cities/deleteCity.controller";
import getCitiesController from "../../controllers/cities/getCities.controller";

import { Router } from "express";

import verifyAdmMiddleware from "../../middlewares/verifyUser.middleware";
import verifyAuthTokenMiddleware from "../../middlewares/verifyToken.middleware";

const router = Router();

router.get("", verifyAuthTokenMiddleware, queryCitiesController);
router.get("/all", verifyAuthTokenMiddleware, getCitiesController);
router.get("/:id", verifyAuthTokenMiddleware, getSingleCityController);
router.patch("/:id", verifyAuthTokenMiddleware, verifyAdmMiddleware, updateCityController);
router.post("/", verifyAuthTokenMiddleware, verifyAdmMiddleware, createCityController);
router.delete("/:id", verifyAuthTokenMiddleware, verifyAdmMiddleware, deleteCityController);

export default router;
