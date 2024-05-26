import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";
const messageRoutes = express.Router();

messageRoutes.get("/:id", protectRoute, getMessages);
messageRoutes.post("/send/:id", protectRoute, sendMessage);

export default messageRoutes;
