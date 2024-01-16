import Jwt from "jsonwebtoken";

export const verifyUser = (req, res, next) => {
	const token = req.cookies.refreshToken;
	if (!token) return res.status(401).send({ message: "Not authenticated" });
	Jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
		if (err) return res.status(403).send({ message: "Token is not valid" });
		next();
	});
};
