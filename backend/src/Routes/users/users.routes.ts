import { Router } from "express";
import createUserController from "../../controllers/users/createUser.controller";
import deleteUserController from "../../controllers/users/deleteUser.controller";
import getLoggedInUserController from "../../controllers/users/getLoggedInUser.controller";
import getSingleUserController from "../../controllers/users/getSingleUser.controller";
import getUsersController from "../../controllers/users/getUsers.controller";
import queryUserByTypeController from "../../controllers/users/queryUserByType.controller";
import updateLoggedInUserController from "../../controllers/users/updateLoggedInUser.controller";
import updateUserController from "../../controllers/users/updateUser.controller";
import userLoginController from "../../controllers/users/userLogin.controller";

const router = Router();

router.get("/all", getUsersController);
router.get("/:id", getSingleUserController);
router.get("/type", queryUserByTypeController);
router.get("/profile", getLoggedInUserController);
router.post("/", createUserController);
router.post("/login", userLoginController);
router.patch("/:id", updateUserController);
router.patch("/profile/update", updateLoggedInUserController);
router.delete("/:id", deleteUserController);

export default router;
