import express from "express";
import { createUser, getListOfUsers } from "../controllers/user.js";

const router = express.Router();

/* Read */
router.post("/new",createUser);
router.get("/users",getListOfUsers);

export default router;
