import express from "express";
import {
	CreateUser,
	LoginUser,
	RefreshTokens,
} from "../controllers/UserController.js";

const router = express.Router();
router.use(express.json());

router.post("/register", (req, res) => {
	CreateUser(req, res);
});

router.post("/login", (req, res) => {
	LoginUser(req, res);
});

router.get("/refresh", (req, res) => {
	RefreshTokens(req, res);
});

export { router as AuthRoutes };
