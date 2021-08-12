import express from "express";
import { home } from "../controllers/root.controllers";
import { getSignup, postSignup } from "../controllers/users.controllers";

const RootRouter = express.Router();

app.get("/", home);

app.get("/signup", getSignup);

app.post("/signup", postSignup);

export default RootRouter;
