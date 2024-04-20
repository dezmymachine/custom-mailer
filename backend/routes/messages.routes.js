import { Router } from "express";
import {
  addMessage,
  getMessages,
} from "../controllers/messages.controllers.js";
import { userVerfication } from "../middlewares/AuthMiddleware.js";

//create main router
const router = Router();

//create other routes

router.post("/", userVerfication, addMessage);
router.get("/", userVerfication, getMessages);

//export router

export default router;
