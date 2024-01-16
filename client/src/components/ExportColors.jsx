import React from "react";
import { useParams } from "react-router-dom";
import { getContrast } from "../helpers/utils";
import { IoIosCodeDownload } from "../assets/icons";
import html2canvas from "html2canvas";

const ExportColors = () => {
	const downloadPDF = async () => {
		const element = document.getElementById("ColorExport");
		const buttonToIgnore = document.getElementById("downloadPDF");
		const canvas = await html2canvas(element, {
			logging: false, // disable logging
			scale: 5, // increase scale for higher resolution
			ignoreElements: (element) => element === buttonToIgnore,
		});
		const data = canvas.toDataURL("image/jpg");
		const link = document.createElement("a");

		if (typeof link.download === "string") {
			link.href = data;
			link.download = "Huey.jpg";

			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		} else {
			window.open(data);
		}
	};

	const { id } = useParams();
	const arrayOfColors = id.split("-");
	return (
		<div
			id="ColorExport"
			className="mt-16 h-[calc(100vh-4rem)] bg-dark w-full flex flex-col gap-5 items-center justify-center"
		>
			<section className="bg-dark mx-2  text-light font-primary h-fit max-w-[51rem] border border-light/10">
				<div className="flex justify-center items-center border-b border-light/20">
					<img src="/Logo_huey.png" className="h-10 aspect-square" alt="LOGO" />
					<p className="text-3xl px-4 self-center py-8 sm:text-4xl">
						Huey Color Generator
					</p>
				</div>
				<div className=" px-10 py-5 flex flex-wrap gap-5 justify-center items-center">
					{arrayOfColors.map((color, index) => (
						<div
							key={index}
							className={`w-20 h-20 sm:w-32 sm:h-32 rounded-lg ${
								getContrast(color, "#FFFFFF") < 0.333333
									? "border border-light/50"
									: "border border-dark/50"
							}`}
							style={{ backgroundColor: `#${color}` }}
						>
							<h3
								className={`${
									getContrast(color, "#FFFFFF") < 0.333333
										? "text-white"
										: "text-black"
								} text-center items-center`}
							>{`#${color}`}</h3>
						</div>
					))}
				</div>
			</section>
			<button
				id="downloadPDF"
				onClick={() => downloadPDF()}
				className="flex gap-1 items-center justify-center text-light font-primary border border-light hover:text-dark hover:bg-primary hover:border-primary transition-all px-6 py-3 "
			>
				<IoIosCodeDownload size={"2rem"} />
				Download
			</button>
		</div>
	);
};

export default ExportColors;
