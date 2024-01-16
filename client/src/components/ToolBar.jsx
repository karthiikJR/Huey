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
import LikeDialog from "./LikeDialog";

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
					className="min-[400px]:h-6 h-4 min-[400px]:w-8 w-4 transition-all duration-300 rotate-0 hover:text-white"
				/>
			),
			func: plusBtnFunction,
		},
		{
			icon: (
				<MdOutlineGradient className="min-[400px]:h-6 h-4 min-[400px]:w-8 w-4 hover:text-white transition-all duration-300" />
			),
			func: () => {
				navigate("/gradient");
			},
		},
		{
			icon: (
				<MdImageSearch className="min-[400px]:h-6 h-4 min-[400px]:w-8 w-4 hover:text-white transition-all duration-300" />
			),
			func: () => {
				navigate("/generate/image");
			},
		},
		{
			icon: (
				<FaFont className="min-[400px]:h-6 h-4 min-[400px]:w-8 w-4 hover:text-white transition-all duration-300" />
			),
			func: () => {
				navigate("/fonts");
			},
		},
		{
			icon: (
				<MdShare className="min-[400px]:h-6 h-4 min-[400px]:w-8 w-4 hover:text-white transition-all duration-300" />
			),
			func: () => {
				const shareDialog = document.getElementById("shareDialog");
				shareDialog.showModal();
			},
		},
		{
			icon: (
				<FaHeart className="min-[400px]:h-6 h-4 min-[400px]:w-8 w-4 hover:text-white transition-all duration-300" />
			),
			func: () => {
				const likeDialog = document.getElementById("likeDialog");
				likeDialog.showModal();
			},
		},
	];
	return (
		<>
			<LikeDialog arrayOfColors={arrayOfColors} />
			<ShareDialog arrayOfColors={arrayOfColors} />
			<div className="sm:px-5 px-2 bg-dark border-t border-b border-light text-light/50 font-primary h-16 flex items-center justify-between">
				<p className="sm:inline-block hidden ">
					Press the spacebar to generate new Hues!
				</p>

				<button
					onClick={generateColors}
					className="sm:hidden block h-10 border border-light/50 text-sm rounded-lg px-2"
				>
					Generate
				</button>
				<div className="flex gap-3 ">
					{buttonIcons.map((button, index) => {
						return (
							<button onClick={button.func} key={index}>
								{button.icon}
							</button>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default ToolBar;
