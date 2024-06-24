import express from "express";
import { logOut, login, signUp } from "../controllers/auth.controller.js";
const authroutes = express.Router();
// console.log("at routes")
authroutes.post("/login", login);
authroutes.post("/signup", signUp);
authroutes.post("/logout", logOut);

export default authroutes;
