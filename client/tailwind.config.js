/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#FFF06B",
				orange: "#DE7850",
				green: "#B3D5A8",
				light: "#F2EEFF",
				dark: "#131313",
			},
			fontFamily: {
				primary: ["DotGothic16", "sans-serif"],
				secondary: ["DM Sans", "sans-serif"],
			},
			transitionProperty: {
				transformAndopacity: "transform, opacity",
			},
		},
	},
	plugins: [],
};

