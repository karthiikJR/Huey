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
			<div className="bg-dark mt-16 px-2 py-2 flex gap-10 justify-center text-light text-xl sm:text-2xl text-center font-primary">
				<h1>Your Hues in gradient</h1>{" "}
				<button className="sm:hidden block">Button</button>
			</div>
			<div className="px-10 pt-8 pb-36 overflow-auto h-screen w-full bg-dark text-light justify-center items-center flex gap-16 flex-wrap">
				{[...Array(6)].map((_, i) => (
					<GradientCard colors={colors} key={i} id={i} />
				))}
			</div>
		</>
	);
}

export default Gradient;
