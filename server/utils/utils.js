import bcrypt from "bcrypt";

export const checkPassword = async (password, hashedPassowrd) => {
	return await bcrypt.compare(password, hashedPassowrd);
};
