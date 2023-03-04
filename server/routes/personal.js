import express from "express";
import { getLanguage } from "../controllers/personal.js";

const router = express.Router();

router.get("/languages", getLanguage);


export default router;