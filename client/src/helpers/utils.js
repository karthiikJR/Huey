import { colors } from "./data/Colors";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const req = axios.create({
	baseURL: import.meta.env.VITE_BACKEND_URL,
	withCredentials: true,
});

req.interceptors.request.use(async (config) => {
	let currentTime = new Date();
	const token = getDataFromLocalStorage("user");
	if (config.url !== "/auth/refresh") {
		const { exp } = jwtDecode(token);
		if (exp * 1000 < currentTime.getTime()) {
			const response = req.get("/auth/refresh");

			if (response.status === 200) setDataToLocalStorage("user", response.data);
			else {
				removeDataFromLocalStorage("user");
				alert("Session expired. Please login again");
			}
		}
	}
	return config;
});

export { req as AxiosAuth };

const colorNames = Object.keys(colors);
const hexToColorNameMap = Object.fromEntries(
	Object.entries(colors).map(([colorName, hexCode]) => {
		const modifiedColorName = colorName
			.toLowerCase()
			.replace(/(^|\s)\S/g, (firstLetter) => firstLetter.toUpperCase());

		return [hexCode, modifiedColorName];
	})
);

export const getColorName = ({ hexCode }) => {
	return hexToColorNameMap[hexCode] || null;
};

export const getRandomColors = (numberOfColors) => {
	const randomColors = [];
	for (let i = 0; i < numberOfColors; i++) {
		const randomIndex = Math.floor(Math.random() * colorNames.length);
		const randomColorName = colorNames[randomIndex];
		const randomColorHex = colors[randomColorName];
		randomColors.push(randomColorHex);
	}

	return randomColors;
};

export const getSingleRandomColor = () => {
	const randomIndex = Math.floor(Math.random() * colorNames.length);
	const randomColorName = colorNames[randomIndex];
	const randomColorHex = colors[randomColorName];
	return randomColorHex;
};

function luminanace(r, g, b) {
	var a = [r, g, b].map(function (v) {
		v /= 255;
		return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
	});
	return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}
function contrast(rgb1, rgb2) {
	const luminanceFront = luminanace(rgb1[0], rgb1[1], rgb1[2]);
	const luminanceBack = luminanace(rgb2[0], rgb2[1], rgb2[2]);
	return luminanceBack > luminanceFront
		? (luminanceFront + 0.05) / (luminanceBack + 0.05)
		: (luminanceBack + 0.05) / (luminanceFront + 0.05);
}

function hexToRgb(hex) {
	// Remove the hash character, if present
	hex = hex.replace(/^#/, "");

	// Parse the hex code into RGB values
	const bigint = parseInt(hex, 16);
	const r = (bigint >> 16) & 255;
	const g = (bigint >> 8) & 255;
	const b = bigint & 255;

	return [r, g, b];
}

export const getContrast = (color1, color2) => {
	const rgb1 = hexToRgb(color1);
	const rgb2 = hexToRgb(color2);
	return contrast(rgb1, rgb2);
};

export const toggleButton = () => {
	const plusIcon = document.getElementById("plusIcon");
	plusIcon.classList.toggle("rotate-45");
	plusIcon.classList.toggle("scale-[2.5]");

	const hamburgerMenu = document.getElementById("hamburgerMenu");
	hamburgerMenu.classList.toggle("opacity-0");
	hamburgerMenu.classList.toggle("translate-x-full");

	const hamburgerLinks = document.getElementById("HamgburgerLinks");
	const links = hamburgerLinks.children;

	for (let i = 0; i < links.length; i++) {
		const link = links[i];
		link.classList.toggle("opacity-0");
		link.classList.toggle("translate-y-20");
	}
};

function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

export function rgbToHex(r, g, b) {
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export const setDataToLocalStorage = (key, value) => {
	localStorage.setItem(key, JSON.stringify(value));
};

export const getDataFromLocalStorage = (key) => {
	return localStorage.getItem(key);
};

export const removeDataFromLocalStorage = (key) => {
	localStorage.removeItem(key);
};

export const checkForValidToken = async (token) => {
	if (token === null || !token) return false;
	const { exp } = jwtDecode(token);
	const currentTime = Date.now() / 1000;
	if (exp < currentTime) {
		const response = await req.get("/auth/refresh");

		if (response.status === 200) {
			setDataToLocalStorage("user", response.data);
			return true;
		}
		return false;
	}
	return true;
};