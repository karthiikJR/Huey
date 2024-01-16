import Jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET;

export const generateSessionToken = (user) => {
	const payload = {
		id: user.id,
		username: user.username,
	};
	return Jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
};

export const generateRefreshToken = (user) => {
	const payload = {
		id: user.id,
		username: user.username,
	};
	return Jwt.sign(payload, SECRET_KEY, { expiresIn: "7d" });
};
