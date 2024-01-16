import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import {
	generateSessionToken,
	generateRefreshToken,
} from "../utils/Generate.js";
import { checkPassword } from "../utils/utils.js";
import Jwt from "jsonwebtoken";

const prisma = new PrismaClient();

const SALT = process.env.SALT;

export const LoginUser = async (req, res) => {
	const { email, password } = req.body;
	const user = await prisma.user.findUnique({ where: { email: email } });
	if (user && (await checkPassword(password, user.password))) {
		const sessionToken = generateSessionToken(user);
		const refreshToken = generateRefreshToken(user);
		return res
			.status(201)
			.cookie("refreshToken", refreshToken, {
				sameSite: "none",
				path: "/",
				expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
				httpOnly: true,
				secure: true,
			})
			.json({
				sessionToken,
				message: "User successfully logged in",
			});
	} else return res.status(401).send({ message: "Invalid credentials" });
};

export const CreateUser = async (req, res) => {
	const { email, password, username } = req.body;
	let user = await prisma.user.findUnique({ where: { email } });
	if (user)
		return res
			.status(409)
			.send({ message: "User already exists with same email" });

	user = await prisma.user.findUnique({ where: { username } });
	if (user)
		return res
			.status(409)
			.send({ message: "User already exists with same username" });

	const hashedPassword = await bcrypt.hash(password, Number(SALT));
	const newUser = await prisma.user.create({
		data: {
			email,
			username,
			password: hashedPassword,
		},
	});
	const sessionToken = generateSessionToken(newUser);
	const refreshToken = generateRefreshToken(newUser);
	return res
		.status(201)
		.cookie("refreshToken", refreshToken, {
			sameSite: "strict",
			path: "/",
			expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
			httpOnly: true,
			secure: true,
		})
		.json({ sessionToken, message: "User created successfully" });
};

export const RefreshTokens = async (req, res) => {
	const token = req.cookies.refreshToken;
	console.log(token);
	if (!token) return res.status(401).send({ message: "No token found" });
	Jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
		if (err) return res.status(403).send({ message: "Invalid token" });
		const sessionToken = generateSessionToken(user);
		const refreshToken = generateRefreshToken(user);
		return res
			.status(200)
			.cookie("refreshToken", refreshToken, {
				sameSite: "none",
				path: "/",
				expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
				httpOnly: true,
			})
			.json({
				sessionToken,
				message: "Successfully refreshed token",
			});
	});
};
