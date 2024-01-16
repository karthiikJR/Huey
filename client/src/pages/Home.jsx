import React from 'react'
import Layout from "../components/sharedComponents/Layout";
import { Link, useNavigate } from "react-router-dom";
import HueyVideo from "../assets/HueyHeroSection.webm";
import arrow from "../assets/arrow.svg";

function Home() {
	const navigate = useNavigate();
	const navToGenerate = () => {
		navigate("/generate");
	};
	return (
		<div className="md:mt-0 mt-16 bg-dark md:h-screen h-full w-full flex md:flex-row flex-col">
			<section className="p-5 text-light flex flex-col lg:gap-10 gap-5 self-center">
				<h1 className="font-primary text-3xl lg:text-5xl font-light">
					Discover Endless Hues with Huey's Palette Generator
				</h1>
				<p className="text-sm">
					Explore vibrant palettes effortlessly with Huey. From images or random
					picks, spark your creativity and make your projects pop with color.
				</p>
				<Link
					className="w-fit bg-primary px-6 py-3 rounded-full font-primary text-dark border border-primary hover:bg-transparent hover:text-orange hover:border-orange transition-all ease-in-out"
					to={"/generate"}
				>
					Start Generating!
				</Link>
			</section>
			<section className="px-5 text-light flex flex-col gap-5 self-center">
				<video
					onClick={navToGenerate}
					className="h-fit w-full cursor-pointer"
					autoPlay
					loop
					muted
					playsInline
				>
					<source src={HueyVideo} type="video/webm" />
				</video>
				<p
					onClick={navToGenerate}
					className="group cursor-pointer p-2 font-primary text-xl flex gap-2 justify-start self-start mb-10"
				>
					Craft vibrant hues{" "}
					<img
						src={arrow}
						alt="arrow"
						className="w-5 h-5 group-hover:-rotate-12 transition-all"
					/>
				</p>
			</section>
		</div>
	);
}

export default Home