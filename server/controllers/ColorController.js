import express from "express";
import { verifyUser } from "../middleware/VerifyUser.js";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
router.use(express.json());

const prisma = new PrismaClient();

export const AddColor = async (req, res) => {
	const { colors, colorGroupName, userId } = req.body;
	colors.sort();
	let existingColor = await prisma.color.findMany({
		where: {
			userId: userId,
		},
	});

	if (existingColor == null || existingColor.length == 0) {
		const response = await prisma.color.create({
			data: {
				userId: userId,
				colorset: {
					create: {
						name: colorGroupName,
						listOfColors: colors,
					},
				},
			},
		});
		return res.status(200).send(response);
	}
	const colorAlreadyExists = await prisma.colorSet.findMany({
		where: {
			listOfColors: { equals: colors },
		},
	});
	if (colorAlreadyExists.length > 0) {
		return res.status(400).send({ message: "Color already exists" });
	}

	const response = await prisma.colorSet.create({
		data: {
			name: colorGroupName,
			listOfColors: colors,
			colorId: existingColor[0].id,
		},
	});
	res.status(200).send(response);
};

export const GetColors = async (req, res) => {
	const userId = req.query.userId;
	const response = await prisma.color.findFirst({
		where: {
			userId: userId,
		},
		include: {
			colorset: true,
		},
	});
	res.status(200).send(response?.colorset);
};

export const DeleteColor = async (req, res) => {
	const { colorId } = req.body;
	const colorToDelete = await prisma.colorSet.findUnique({
		where: {
			id: colorId,
		},
	});
	if (!colorToDelete) {
		return res.status(400).send({ message: "Color not found" });
	}
	const response = await prisma.colorSet.delete({
		where: {
			id: colorId,
		},
	});
	res.status(200).json({ message: "Color deleted successfully", response });
};
