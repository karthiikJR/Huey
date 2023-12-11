import React from "react";

function AboutUsCard({ card }) {
	return (
		<div className="w-[22rem] p-4 flex flex-col gap-5 justify-center h-64 border border-white/10 hover:bg-light/[0.01] hover:border-white transition-all duration-300 rounded-3xl">
			{card.icon}
			<h1 className="text-2xl">{card.heading}</h1>
			<p className="font-secondary text-sm">{card.content}</p>
		</div>
	);
}

export default AboutUsCard;
