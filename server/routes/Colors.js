import express from "express";
import { verifyUser } from "../middleware/VerifyUser.js";
import { PrismaClient } from "@prisma/client";
import {
	AddColor,
	GetColors,
	DeleteColor,
} from "../controllers/ColorController.js";

const router = express.Router();
router.use(express.json());

const prisma = new PrismaClient();

router.post("/add", verifyUser, async (req, res) => {
	AddColor(req, res);
});

router.get("/get", verifyUser, async (req, res) => {
	GetColors(req, res);
});

router.delete("/delete", verifyUser, async (req, res) => {
	DeleteColor(req, res);
});

export { router as ColorAuth };
