import React from "react";
import AboutUsCard from "../components/AboutUsCard";
import {
	IoIosColorPalette,
	MdColorize,
	MdShare,
	FaHeart,
	FaFont,
	MdOutlineGradient,
} from "../assets/icons";
import aboutImg from "../assets/aboutImg.webp";

function About() {
	const aboutUsCardContent = [
		{
			heading: "Color Visionary",
			icon: <IoIosColorPalette className="text-light text-4xl" />,
			content:
				"Explore endless color possibilities and discover perfect combinations that captivate your audience.",
		},
		{
			heading: "Image-Inspired Hues",
			icon: <MdColorize className="text-light text-4xl" />,
			content:
				"Transform your visual inspirations into tangible color palettes. Using image-to-palette feature, every pixel becomes a source of creativity.",
		},
		{
			heading: "Creative Vault",
			icon: <MdShare className="text-light text-4xl" />,
			content:
				"Keep your color treasures safe. Effortlessly save and revisit your favorite palettes, ensuring no stroke of genius is ever lost.",
		},
		{
			heading: "Collaborative Canvas",
			icon: <FaHeart className="text-light text-4xl" />,
			content:
				"Colors are meant to be shared. Collaborate with your team on projects or showcase your unique palettes to the world.",
		},
		{
			heading: "Gradient Harmony",
			icon: <MdOutlineGradient className="text-light text-4xl" />,
			content:
				"Explore the dynamic interplay of colors with our gradient-check feature. Ensure seamless transitions from one shade to another.",
		},
		{
			heading: "Typographic Harmony",
			icon: <FaFont className="text-light text-4xl" />,
			content:
				"Elevate your design language with expert font pairings ensuring visual cohesion and storytelling.",
		},
	];

	return (
		<div className="h-full mt-16 sm:mt-0">
			<section className="relative h-screen w-full sm:py-40 py-10 bg-dark text-light font-primary px-5 md:px-32">
				<div>
					<h1 className="sm:text-7xl text-5xl leading-[1.2]">
						Palette Perfection,
						<br />{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange">
							Your Way.
						</span>
					</h1>
					<p className="font-secondary pt-8 mt-10 w-full lg:w-1/2 text-light/50">
						Welcome to Huey, where colors speak louder than words. At Huey, we
						believe in the power of hues to inspire, evoke emotions, and
						transform ordinary moments into extraordinary experiences. Our
						journey began with a simple idea: to make the process of creating
						stunning color palettes as effortless as possible.
					</p>
				</div>
				<div className="absolute z-10 bottom-0 left-0 w-full h-20 bg-light/[0.05]"></div>
			</section>
			<section className="relative sm:py-16 py-10 px-5 md:px-32 w-full h-full bg-dark font-primary text-light">
				<h1 className="sm:text-7xl mb-8 text-5xl">About Huey</h1>
				<div className="flex flex-wrap mb-16 gap-10 justify-center sm:py-0 py-5">
					{aboutUsCardContent.map((card, index) => {
						return <AboutUsCard key={index} card={card} />;
					})}
				</div>
				<div className="absolute z-10 bottom-0 left-0 w-full h-20 bg-light/[0.05]"></div>
			</section>
			<section className="relative sm:py-16 py-10 px-5 md:px-32 w-full h-full bg-dark font-primary text-light">
				<h1 className="sm:text-7xl text-5xl">About Me</h1>
				<div className="flex sm:mb-10 mb-12 justify-between items-center flex-col-reverse sm:flex-row">
					<p className="font-secondary pt-8 w-full lg:w-1/2 text-light/50 ">
						Hey, I'm{" "}
						<span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange">
							Karthik J Rao
						</span>
						, a MERN Stack Developer with a passion for 3D design. An
						enthusiastic learner and a creative thinker. I bring a dynamic
						approach to every project. Beyond coding, my heart beats for
						technology and gaming. Whether I'm immersed in the virtual worlds of
						gaming or sculpting in 3D, I find joy in the blend of creativity and
						technology. Let's create something amazing together!
						<span className="flex gap-5">
							<a
								href="https://www.linkedin.com/in/karthik-j-rao/"
								target="_blank"
								rel="noreferrer"
								className="text-orange"
							>
								LinkedIn
							</a>{" "}
							|{" "}
							<a
								href="https://github.com/karthiikJR"
								target="_blank"
								rel="noreferrer"
								className="text-orange"
							>
								Github
							</a>
							|{" "}
							<a
								href="https://www.instagram.com/karthikjr._/"
								target="_blank"
								rel="noreferrer"
								className="text-orange"
							>
								Instagram
							</a>
						</span>
					</p>
					<img
						className="h-40 w-40 mt-5 sm:mt-0 rounded-full"
						src={aboutImg}
						alt="Karthik J Rao"
					/>
				</div>
				<div className="absolute z-10 bottom-0 left-0 w-full h-20 bg-light/[0.05]"></div>
			</section>
		</div>
	);
}

export default About;
