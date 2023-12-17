import React from "react";
import errorImg from "../assets/errorImg.webp";
import { Link } from "react-router-dom";

function Error() {
	return (
		<section className="z-20 overflow-hidden relative bg-dark text-light h-screen w-full font-primary flex flex-col gap-5 justify-center items-center">
			<h1 className="text-9xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange">
				404
			</h1>
			<p>Uh oh. Page not found</p>
			<img
				className="absolute w-full z-0 opacity-5 filter grayscale"
				src={errorImg}
				alt="Error"
			/>
			<Link
				className="relative z-10 w-fit bg-primary px-6 py-3 rounded-full font-primary text-dark border border-primary hover:bg-transparent hover:text-orange hover:border-orange transition-all ease-in-out"
				to={"/"}
			>
				Return Home
			</Link>
		</section>
	);
}

export default Error;
