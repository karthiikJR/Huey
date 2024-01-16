import React from "react";

function Loading() {
	return (
		<section className="w-full h-[calc(100vh-4rem)] text-light font-primary bg-dark mt-16 flex flex-col gap-10 items-center justify-center">
			<div className="lg:w-32 w-20 lg:h-32 h-20 lg:border-8 border-[6px] border-l-primary border-light/10 rounded-full animate-rotate"></div>
			<h2 className="text-3xl">Loading</h2>
		</section>
	);
}

export default Loading;
