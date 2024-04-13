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
router.get("/", getusers);
router.get("/:id", getUserById);

//export router
export default router;
