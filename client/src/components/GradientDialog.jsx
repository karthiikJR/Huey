import React, { useEffect, useState } from "react";
import { MdOutlineSelectAll, MdDeselect, IoMdClose } from "../assets/icons";
import { useNavigate } from "react-router-dom";

function GradientDialog({ arrayOfColors }) {
	const navigate = useNavigate();
	const [gradients, setGradients] = useState([]);

	useEffect(() => {
		let gradientLocks = Array(arrayOfColors.length).fill(false);
		setGradients(gradientLocks);
	}, [arrayOfColors]);

	const goToGradient = () => {
		if (gradients.filter((gradient) => gradient).length === 0)
			alert("Select atleast 2 colors to create gradient");
		else {
			let gradientColors = [];
			arrayOfColors.map((color, index) => {
				if (gradients[index]) gradientColors.push(color);
			});
			const link = gradientColors
				.map((color) => color.hex.slice(1))
				.join("-")
				.toLowerCase();
			navigate(`/gradient/${link}`);
		}
	};

	const toggleLock = (index) => {
		if (gradients.filter((gradient) => gradient).length < 4) {
			setGradients((prevLockedColors) => {
				const temp = [...prevLockedColors];
				temp[index] = !temp[index];
				return temp;
			});
		} else {
			if (gradients[index] === true) {
				setGradients((prevLockedColors) => {
					const temp = [...prevLockedColors];
					temp[index] = !temp[index];
					return temp;
				});
			}
		}
	};

	return (
		<dialog
			className="backdrop:bg-dark/70 px-10 py-5 bg-dark border border-light text-light font-primary justify-center sm:top-[50%] top-[25%] left-[50%] translate-x-[-50%] translate-y-[-25%] sm:translate-y-[-50%] items-center"
			id="gradientModal"
		>
			<h1 className="text-xl sm:text-3xl flex gap-3 sm:gap-5 items-center justify-center">
				Create Gradient!
				<IoMdClose
					onClick={() => {
						const modal = document.getElementById("gradientModal");
						modal.close();
					}}
					className="cursor-pointer border"
				/>
			</h1>
			<div className="px-5 py-2 flex gap-3 font-secondary sm:gap-5 justify-center items-center flex-col">
				{arrayOfColors.map((color, index) => (
					<div
						key={index}
						className="flex w-full justify-between gap-5 items-center"
					>
						<div
							className="w-10 h-10"
							key={index}
							style={{ backgroundColor: color.hex }}
						></div>
						<h3
							className={`w-fit ${
								true === gradients[index] ? "text-primary" : ""
							}`}
						>
							{color.colorName.split(" ").length > 1
								? color.colorName.split(" ")[1]
								: color.colorName.split(" ")[0]}
						</h3>
						<button onClick={() => toggleLock(index)} className="items-end">
							{true === gradients[index] ? (
								<MdDeselect size={"1.5rem"} className="text-primary" />
							) : (
								<MdOutlineSelectAll size={"1.5rem"} />
							)}
						</button>
					</div>
				))}
				<button
					onClick={goToGradient}
					className="border px-4 py-2 rounded-full hover:bg-primary hover:border-primary hover:text-dark transition-all"
				>
					Go to gradients
				</button>
			</div>
		</dialog>
	);
}

export default GradientDialog;
