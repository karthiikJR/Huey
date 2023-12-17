import React from "react";
import Layout from "../components/sharedComponents/Layout";
import FontCards from "../components/FontCards";

function Fonts() {
	return (
		<Layout>
			<h1 className="text-3xl px-4 py-8 sm:text-6xl bg-dark text-light font-primary border-b border-light/20">
				Font collections
			</h1>
			<div className="w-full h-full bg-dark text-light items-center justify-center flex flex-wrap">
				<FontCards />
			</div>
		</Layout>
	);
}

export default Fonts;
