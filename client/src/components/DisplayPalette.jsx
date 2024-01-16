import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import ToolBar from "./ToolBar";
import {
	getContrast,
	getColorName,
	getSingleRandomColor,
} from "../helpers/utils";
import {
	FaLock,
	FaUnlock,
	HiClipboardCopy,
	HiMinusCircle,
} from "../assets/icons";

function DisplayPalette({ arrayOfColors, setArrayOfColors }) {
	const [lockedColors, setLockedColors] = useState([]);

	useEffect(() => {
		let newLockedColors = Array(arrayOfColors.length).fill(false);
		setLockedColors(newLockedColors);
	}, []);

	useEffect(() => {
		const handleKeyDown = (e) => {
			const likeModal = document.getElementById("likeDialog");
			if (e.keyCode === 32) {
				if (likeModal.open) return;
				e.preventDefault();
				setLockedColors((prevLockedColors) => {
					let index = arrayOfColors.length;
					let tempColors = [...arrayOfColors];
					for (let i = 0; i < index; i++) {
						if (!prevLockedColors[i]) {
							tempColors[i] = getSingleRandomColor();
						}
					}
					setArrayOfColors(tempColors);
					return prevLockedColors;
				});
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [arrayOfColors, setArrayOfColors]);

	let arrayOfColorsWithName = [];
	arrayOfColors.map((color) => {
		const colorName = getColorName({ hexCode: color });
		arrayOfColorsWithName.push({ hex: color, colorName });
	});

	const copyToClipboard = (text) => {
		navigator.clipboard.writeText(text.hex.slice(1));
		toast.success("Color copied to clipboard :)", {
			position: "bottom-center",
			className: "text-light bg-dark font-secondary",
		});
	};

	const generateColors = () => {
		setLockedColors((prevLockedColors) => {
			let index = arrayOfColors.length;
			let tempColors = [...arrayOfColors];
			for (let i = 0; i < index; i++) {
				if (!prevLockedColors[i]) {
					tempColors[i] = getSingleRandomColor();
				}
			}
			setArrayOfColors(tempColors);
			return prevLockedColors;
		});
	};

	const toggleLock = (index) => {
		setLockedColors((prevLockedColors) => {
			const temp = [...prevLockedColors];
			temp[index] = !temp[index];
			return temp;
		});
	};

	const removeColor = (index) => {
		setArrayOfColors((prevArrayOfColors) => {
			let temp = [...prevArrayOfColors];
			if (temp.length === 1) return temp;
			temp.splice(index, 1);
			return temp;
		});
	};
	return (
		<div className="w-full h-[calc(100vh-4rem)] flex sm:flex-col sm:mt-0 mt-[-4rem] flex-col-reverse">
			<ToolBar
				arrayOfColors={arrayOfColorsWithName}
				setArrayOfColors={setArrayOfColors}
				generateColors={generateColors}
			/>
			<div className="flex sm:h-full h-[calc(100vh-8rem)] group flex-col sm:flex-row ">
				{arrayOfColorsWithName.map((color, index) => (
					<div
						className="font-primary flex-1 w-full "
						key={index}
						style={{ backgroundColor: color.hex }}
					>
						<div className="h-full flex gap-5 sm:flex-col justify-center items-center">
							<div className="flex sm:flex-col gap-5">
								<button onClick={() => removeColor(index)}>
									<HiMinusCircle
										className={`${
											getContrast(color.hex, "#FFFFFF") < 0.333333
												? "text-white"
												: "text-black"
										} text-center sm:text-2xl text-xl`}
									/>
								</button>
								<button onClick={() => copyToClipboard(color)}>
									<HiClipboardCopy
										className={`${
											getContrast(color.hex, "#FFFFFF") < 0.333333
												? "text-white"
												: "text-black"
										} text-center sm:text-2xl text-xl`}
									/>
									<Toaster />
								</button>
								<button
									className="focus:outline-none items-center"
									onClick={() => toggleLock(index)}
								>
									{lockedColors[index] ? (
										<FaLock
											className={`${
												getContrast(color.hex, "#FFFFFF") < 0.333333
													? "text-white"
													: "text-black"
											} text-center sm:text-xl text-xs`}
										/>
									) : (
										<FaUnlock
											className={`${
												getContrast(color.hex, "#FFFFFF") < 0.333333
													? "text-white"
													: "text-black"
											} text-center sm:text-xl text-xs`}
										/>
									)}
								</button>
							</div>
							<p
								className={`${
									getContrast(color.hex, "#FFFFFF") < 0.333333
										? "text-white"
										: "text-black"
								} text-center sm:text-4xl text-2xl`}
							>
								{color.hex.slice(1)}
							</p>
							<p
								className={`${
									getContrast(color.hex, "#FFFFFF") < 0.333333
										? "text-white"
										: "text-black"
								} text-center font-secondary font-light sm:block hidden`}
							>
								{color.colorName}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default DisplayPalette;
