import React from "react";
import Layout from "../components/sharedComponents/Layout";
import FontCards from "../components/FontCards";

function Fonts() {
	return (
		<Layout>
			<div className="w-full h-full bg-dark text-light items-center justify-center flex flex-wrap">
				<FontCards />
			</div>
		</Layout>
	);
}

export default Fonts;
