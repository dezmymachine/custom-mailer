import { Router } from "express";
import {
  addMessage,
  getMessages,
} from "../controllers/messages.controllers.js";

//create main router
const router = Router();

//create other routes

router.post("/", addMessage);

router.get("/", getMessages);

//export router

export default router;
