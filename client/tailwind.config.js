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
				cormorant: ["Cormorant", "serif"],
				inter: ["Inter", "sans-serif"],
				josefin: ["Josefin Sans", "sans-serif"],
				lato: ["Lato", "sans-serif"],
				libre: ["Libre Baskerville", "serif"],
				merriweather: ["Merriweather", "serif"],
				open: ["Open Sans", "sans-serif"],
				oswald: ["Oswald", "sans-serif"],
				playfair: ["Playfair Display", "serif"],
				raleway: ["Raleway", "sans-serif"],
				roboto: ["Roboto", "sans-serif"],
				source: ["Source Sans 3", "sans-serif"],
				yeseva: ["Yeseva One", "serif"],
			},
			transitionProperty: {
				transformAndopacity: "transform, opacity",
			},
		},
	},
	plugins: [],
};

