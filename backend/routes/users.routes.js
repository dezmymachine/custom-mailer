import { Router } from "express";
import {
  SignUp,
  getUserById,
  getusers,
  logIn,
} from "../controllers/users.controllers.js";

//create main router
const router = Router();

//create other routes
router.post("/register", SignUp);
router.post("/login", logIn);
router.get("/me", getUserById);
router.get("/logout", getusers);

//export router
export default router;
