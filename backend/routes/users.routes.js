import { Router } from "express";
import {
  SignUp,
  logIn,
  getMe,
  logOut,
} from "../controllers/users.controllers.js";
import { userVerfication } from "../middlewares/AuthMiddleware.js";

//create main router
const router = Router();

//create other routes
router.post("/register", SignUp);
router.post("/login", logIn);
router.post("/logout", logOut);
router.post("/", userVerfication);
router.get("/me", getMe);

//export router
export default router;
