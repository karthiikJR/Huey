import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DisplayPalette from "../components/DisplayPalette";
import Layout from "../components/sharedComponents/Layout";

import { getRandomColors } from "../helpers/utils";

function Generate() {
	const { id } = useParams();

	const [arrayOfColors, setArrayOfColors] = useState([]);

	useEffect(() => {
		if (id) {
			// If id is provided, split it
			setArrayOfColors(id.split("-").map((element) => "#" + element));
		} else {
			// If id is not provided, generate random colors
			setArrayOfColors(getRandomColors(5));
		}
	}, [id]); // Add id as a dependency to the useEffect
	return (
		<div className="mt-32 sm:mt-16 h-full">
			<DisplayPalette
				arrayOfColors={arrayOfColors}
				setArrayOfColors={setArrayOfColors}
			/>
		</div>
	);
}

export default Generate;
