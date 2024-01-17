import express from "express";
import {
	CreateUser,
	LoginUser,
	LogoutUser,
	RefreshTokens,
} from "../controllers/UserController.js";
import cookieParser from "cookie-parser";

const router = express.Router();
router.use(express.json());
router.use(cookieParser());

router.post("/register", (req, res) => {
	CreateUser(req, res);
});

router.post("/login", (req, res) => {
	LoginUser(req, res);
});

router.get("/refresh", (req, res) => {
	RefreshTokens(req, res);
});

router.get("/logout", (req, res) => {
	LogoutUser(req, res);
});

export { router as AuthRoutes };
