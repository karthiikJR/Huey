import React, { useState, useRef } from "react";
import ColorThief from "/node_modules/colorthief/dist/color-thief.mjs";
import FromImageCardGroup from "./FromImageCardGroup";
import UploadImg from "../../assets/UploadImage.svg";

function GenerateFromImage() {
	const fileInput = useRef(null);

	const [numberOfHues, setNumberOfHues] = useState(0);
	const [image, setImage] = useState(null);
	const [colorPalette, setColorPalette] = useState(null);

	const clickButtonForUpload = () => {
		fileInput.current.click();
	};

	const handleClick = (ev) => {
		const userImg = document.getElementById("setImage");
		userImg.src = URL.createObjectURL(ev.target.files[0]);

		const img = ev.target.files[0];
		if (img) {
			const imgUrl = URL.createObjectURL(img);
			// Set the src attribute using React state
			setImage(imgUrl);
			URL.revokeObjectURL(imgUrl);
		}
	};

	const renderColorPalette = () => {
		const image = document.getElementById("fileInput");
		const img = image.files[0];
		const reader = new FileReader();

		reader.onload = async (e) => {
			const img = new Image();

			img.onload = () => {
				const colorThief = new ColorThief();
				const palette = colorThief.getPalette(img, 10);
				setImage(e.target.result);
				setColorPalette(palette);
			};
			img.src = e.target.result;
		};
		reader.readAsDataURL(img);
	};

	return (
		<div className=" mt-16 p-2 min-h-[calc(100vh-4rem)] w-full font-primary text-white bg-dark">
			<input
				id="fileInput"
				type="file"
				ref={fileInput}
				style={{ display: "none" }}
				onChange={handleClick}
			/>
			<h1 className="text-2xl mb-5 sm:text-3xl text-center">
				Generate Hues from images
			</h1>

			<div className="flex flex-col gap-5 justify-center items-center">
				<div className="flex items-center justify-between gap-5">
					<input
						id="numberOfHues"
						className="w-40 sm:w-96"
						type="range"
						min="2"
						max="10"
						defaultValue="2"
						disabled={image === null ? true : false}
						onChange={(event) => {
							setNumberOfHues(event.target.value);
							renderColorPalette();
						}}
					/>
					<p className="text-center">
						{numberOfHues === 0 ? "Number of Hues" : numberOfHues}
					</p>
				</div>
				<img
					onClick={clickButtonForUpload}
					id="setImage"
					className="max-h-80 cursor-pointer"
					src={UploadImg}
					alt="Image"
				/>
			</div>
			<FromImageCardGroup
				numberOfHues={numberOfHues}
				colorPalette={colorPalette}
			/>
		</div>
	);
}

export default GenerateFromImage;
