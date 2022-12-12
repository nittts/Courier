import { userCreationSchema, userLoginSchema, userUpdateSchema } from "../../schemas/users/user.schema";
import { UserCreateValidator, userLoginValidator, userUpdateValidator } from "../../validators/users/user.validator";
import { Router } from "express";
import userCreateController from "../../controllers/users/user.create.controller";
import userLoginController from "../../controllers/users/user.login.controller";
import userGetByIDController from "../../controllers/users/user.getUserByID.controller";
import userGetLoggedUserController from "../../controllers/users/user.getLoggedUser.controller";

import verifyAuthTokenMiddleware from "../../middlewares/verify.token.middleware";
import userUpdateController from "../../controllers/users/user.update.controller";
import verifyAdmMiddleware from "../../middlewares/verify.adm.middleware";
import userGetAllController from "../../controllers/users/user.getAll.controller";
import userQueryController from "../../controllers/users/user.query.controller";

const router = Router();

router.post("/login", userLoginValidator(userLoginSchema), userLoginController);
router.post("", UserCreateValidator(userCreationSchema), userCreateController);

router.get("/profile", userGetLoggedUserController);
router.get("/all", userGetAllController);
router.get("/search", userQueryController);
router.get("/:id", userGetByIDController);

router.patch(
  "/:id",
  verifyAuthTokenMiddleware,
  verifyAdmMiddleware,
  userUpdateValidator(userUpdateSchema),
  userUpdateController
);

export default router;
