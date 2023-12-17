import React from "react";
import FromImageCard from "./FromImageCard";
import { Link } from "react-router-dom";
import { rgbToHex } from "../../helpers/utils";

function FromImageCardGroup({ numberOfHues, colorPalette }) {
	let link = "/generate/";
	colorPalette === null
		? ""
		: colorPalette
				.filter((_, index) => index < numberOfHues)
				.map((color) => {
					link += rgbToHex(color[0], color[1], color[2]).slice(1) + "-";
				});

	return (
		<div className="flex flex-col justify-center items-center">
			<section className="mt-5 mb-5 sm:mb-10 flex flex-wrap gap-5 justify-center items-center">
				{colorPalette === null
					? ""
					: colorPalette
							.filter((_, index) => index < numberOfHues)
							.map((color, index) => <FromImageCard key={index} RGB={color} />)}
			</section>
			{colorPalette === null ? (
				""
			) : (
				<Link
					to={link.slice(0, -1)}
					className="w-fit px-2 py-4 border hover:text-dark hover:bg-light hover:border-light transition-all border-light mb-10"
				>
					View in Generate
				</Link>
			)}
		</div>
	);
}

export default FromImageCardGroup;
