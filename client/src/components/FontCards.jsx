import React from "react";
import toast, { Toaster } from "react-hot-toast";

const fonts = [
	{
		primary: "font-primary",
		secondary: "font-secondary",
		name: "DotGothic16",
		secFont: "DM Sans",
		fontFamily:
			"@import url('https://fonts.googleapis.com/css2?family=DotGothic16&family=DM+Sans:opsz@9..40&display=swap');",
	},
	{
		primary: "font-oswald",
		secondary: "font-roboto",
		name: "Oswald",
		secFont: "Roboto",
		fontFamily:
			"@import url('https://fonts.googleapis.com/css2?family=Oswald&family=Roboto&display=swap');",
	},
	{
		primary: "font-raleway",
		secondary: "font-secondary",
		name: "Raleway",
		secFont: "DM Sans",
		fontFamily:
			"@import url('https://fonts.googleapis.com/css2?family=Raleway&family=DM+Sans:opsz@9..40&display=swap');",
	},
	{
		primary: "font-playfair",
		secondary: "font-source",
		name: "Playfair Display",
		secFont: "Source Sans 3",
		fontFamily:
			"@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&family=Source+Sans+3&display=swap');",
	},
	{
		primary: "font-open",
		secondary: "font-merriweather",
		name: "Open Sans",
		secFont: "Merriweather",
		fontFamily:
			"@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Merriweather&display=swap');",
	},
	{
		primary: "font-libre",
		secondary: "font-lato",
		name: "Libre Baskerville",
		secFont: "Lato",
		fontFamily:
			"@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Lato&display=swap');",
	},
	{
		primary: "font-playfair",
		secondary: "font-lato",
		name: "Playfair Display",
		secFont: "Lato",
		fontFamily:
			"@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&family=Lato&display=swap');",
	},
	{
		primary: "font-yeseva",
		secondary: "font-josefin",
		name: "Yeseva One",
		secFont: "Josefin Sans",
		fontFamily:
			"@import url('https://fonts.googleapis.com/css2?family=Yeseva+One&family=Josefin+Sans&display=swap');",
	},
	{
		primary: "font-cormorant",
		secondary: "font-open",
		name: "Cormorant",
		secFont: "Open Sans",
		fontFamily:
			"@import url('https://fonts.googleapis.com/css2?family=Cormorant&family=Open+Sans&display=swap');",
	},
	{
		primary: "font-raleway",
		secondary: "font-inter",
		name: "Raleway",
		secFont: "Inter",
		fontFamily:
			"@import url('https://fonts.googleapis.com/css2?family=Raleway&family=Inter&display=swap');",
	},
];

function FontCards() {
	const copyToClipboard = (text) => {
		navigator.clipboard.writeText(text);
		toast.success("CSS import copied :)", {
			position: "bottom-center",
			className: "text-light bg-dark font-secondary",
		});
	};
	return (
		<>
			{" "}
			{fonts.map((font, index) => {
				return (
					<div
						onClick={() => copyToClipboard(font.fontFamily)}
						key={index}
						className="bg-dark px-4 py-8 m-2 flex flex-col gap-2 sm:gap-10 text-light w-96 h-fit border border-white/10 hover:bg-light/[0.01] hover:border-white transition-all duration-300 rounded-3xl cursor-pointer"
					>
						<h1 className={`text-3xl font-bold ${font.primary}`}>
							{font.primary === "font-primary"
								? "DotGothic16"
								: font.name.toLocaleUpperCase()}
						</h1>
						<p className={`${font.secondary}`}>
							<span className="text-primary">{font.secFont}</span>
							<br />
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quo
							laborum, aliquam aperiam accusamus distinctio.
						</p>
					</div>
				);
			})}
			<Toaster />
		</>
	);
}

export default FontCards;
