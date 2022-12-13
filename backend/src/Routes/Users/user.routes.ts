import { userCreationSchema, userLoginSchema, userUpdateSchema } from "../../schemas/users/user.schema";
import { UserCreateValidator, userLoginValidator, userUpdateValidator } from "../../validators/users/user.validator";

import userLoginController from "../../controllers/users/user.login.controller";
import userQueryController from "../../controllers/users/user.query.controller";
import userDeleteController from "../../controllers/users/user.delete.controller";
import userCreateController from "../../controllers/users/user.create.controller";
import userUpdateController from "../../controllers/users/user.update.controller";
import userGetAllController from "../../controllers/users/user.getAll.controller";
import userGetByIDController from "../../controllers/users/user.getUserByID.controller";
import userGetLoggedUserController from "../../controllers/users/user.getLoggedUser.controller";

import verifyAdmMiddleware from "../../middlewares/verify.adm.middleware";
import verifyAuthTokenMiddleware from "../../middlewares/verify.token.middleware";

import { Router } from "express";

const router = Router();

router.post("", UserCreateValidator(userCreationSchema), userCreateController);
router.post("/login", userLoginValidator(userLoginSchema), userLoginController);

router.get("/all", userGetAllController);
router.get("/:id", userGetByIDController);
router.get("/search", userQueryController);
router.get("/profile", userGetLoggedUserController);

router.patch("/:id", userUpdateValidator(userUpdateSchema), userUpdateController);

router.delete("/:id", userDeleteController);

export default router;
