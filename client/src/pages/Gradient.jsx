import React from "react";
import GradientCard from "../components/GradientCard";
import { useParams } from "react-router-dom";
import { getRandomColors } from "../helpers/utils";

function Gradient() {
	const { id } = useParams();
	let colors = [];
	if (id) colors = id.split("-").map((element) => "#" + element);
	else colors = getRandomColors(4);

	return (
		<>
			<div className="bg-dark mt-16 px-2 py-2 h-full flex gap-10 justify-center text-light">
				<h1 className="text-2xl sm:text-3xl text-center font-primary">
					Check out these gradients I found on internet
				</h1>{" "}
			</div>
			<div className="px-10 py-8 w-full bg-dark justify-center items-center flex gap-16 flex-wrap">
				{[...Array(6)].map((_, i) => (
					<GradientCard key={i} id={i} />
				))}
			</div>
		</>
	);
}

export default Gradient;
