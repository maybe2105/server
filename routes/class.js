import express from "express";
import { createClass, getClass } from "../controllers/class.js";

const router = express.Router();

router.get("/", getClass);

router.post("/", createClass);

export default router;
