import React from "react";
import {
	GoPlus,
	MdOutlineGradient,
	MdImageSearch,
	FaFont,
	MdShare,
	FaHeart,
	GiHamburgerMenu,
} from "../assets/icons";
import { getSingleRandomColor } from "../helpers/utils";
import { useNavigate } from "react-router-dom";
import ShareDialog from "./ShareDialog";
// import GradientDialog from "./GradientDialog";

let count = 1;

function ToolBar({ arrayOfColors, setArrayOfColors, generateColors }) {
	const navigate = useNavigate();

	const plusBtnFunction = () => {
		const addBtn = document.getElementById("AddColor");
		let rotation = 0;
		const angle = 90;
		rotation = angle * count;
		count++;
		addBtn.style.transform = `rotate(${rotation}deg)`;

		setArrayOfColors((prevArrayOfColors) => {
			let temp = [...prevArrayOfColors];
			if (temp.length >= 10) return temp;
			temp.push(getSingleRandomColor());
			return temp;
		});
	};
	const buttonIcons = [
		{
			icon: (
				<GoPlus
					id="AddColor"
					className="w-6 h-6 transition-all duration-300 rotate-0 hover:text-white"
				/>
			),
			func: plusBtnFunction,
		},
		{
			icon: (
				<MdOutlineGradient className="w-6 h-6 hover:text-white transition-all duration-300" />
			),
			func: () => {
				// const modal = document.getElementById("gradientModal");
				// modal.showModal();
				// navigate("/gradient");
			},
		},
		{
			icon: (
				<MdImageSearch className="w-6 h-6 hover:text-white transition-all duration-300" />
			),
			func: () => {
				navigate("/generate/image");
			},
		},
		{
			icon: (
				<FaFont className="w-6 h-6 hover:text-white transition-all duration-300" />
			),
			func: () => {
				navigate("/fonts");
			},
		},
		{
			icon: (
				<MdShare className="w-6 h-6 hover:text-white transition-all min-[375px]:block hidden duration-300" />
			),
			func: () => {
				const shareDialog = document.getElementById("shareDialog");
				shareDialog.showModal();
			},
		},
		{
			icon: (
				<FaHeart className="w-6 h-6 hover:text-white transition-all min-[375px]:block hidden duration-300" />
			),
			func: () => {},
		},
	];
	return (
		<>
			{/* <GradientDialog arrayOfColors={arrayOfColors} /> */}
			<ShareDialog arrayOfColors={arrayOfColors} />
			<div className="sm:px-5 px-2 bg-dark border-t border-b border-light text-light/50 font-primary h-16 flex items-center justify-between">
				<p className="sm:inline-block hidden ">
					Press the spacebar to generate new Hues!
				</p>

				<button
					onClick={generateColors}
					className="sm:hidden block h-10 border border-light/50 rounded-lg px-2"
				>
					Generate
				</button>
				<div className="flex gap-3 sm:gap-5">
					{buttonIcons.map((button, index) => {
						return (
							<button onClick={button.func} key={index}>
								{button.icon}
							</button>
						);
					})}

					<button className=" font-secondary group w-8 h-8 border border-dashed hover:border-dotted transition-all flex justify-center items-center">
						<GiHamburgerMenu className="w-4 h-4" />
					</button>
				</div>
			</div>
		</>
	);
}

export default ToolBar;
