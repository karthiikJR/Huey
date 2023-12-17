import React from "react";
import { useNavigate } from "react-router-dom";
import { IoMdClose, FaFilePdf, FaLink } from "../assets/icons";
import toast, { Toaster } from "react-hot-toast";

function ShareDialog({ arrayOfColors }) {
	const navigate = useNavigate();
	const copyToClipboard = (text) => {
		const url =
			text +
			`/generate/${arrayOfColors.map((color) => color.hex.slice(1)).join("-")}`;
		navigator.clipboard.writeText(url);
		toast.success("Link copied successfully :)", {
			position: "bottom-center",
			className: "text-light bg-dark font-secondary",
		});
	};
	return (
		<>
			<dialog
				className="backdrop:bg-dark/70 w-full sm:w-fit px-4 sm:px-10 py-5 bg-dark border border-light text-light font-primary justify-center sm:top-[50%] top-[25%] left-[50%] translate-x-[-50%] translate-y-[-25%] sm:translate-y-[-50%] items-center"
				id="shareDialog"
			>
				<h1 className="text-xl sm:text-3xl flex gap-3 sm:gap-5 items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange">
					Share your Hue!
					<IoMdClose
						onClick={() => {
							const modal = document.getElementById("shareDialog");
							modal.close();
						}}
						className="cursor-pointer border text-light"
					/>
				</h1>
				<div className="px-5 py-10 flex flex-col gap-5">
					<p
						onClick={() => copyToClipboard(window.location.origin)}
						className="text-sm sm:text-xl flex gap-5 items-center cursor-pointer"
					>
						<FaLink /> Share Link
					</p>
					<p
						onClick={async () => {
							const link = arrayOfColors
								.map((color) => color.hex.slice(1))
								.join("-");
							navigate("/colorsExport/" + link);
						}}
						className="text-sm sm:text-xl cursor-pointer flex gap-5 items-center"
					>
						<FaFilePdf /> Download PDF
					</p>
				</div>
			</dialog>
			<Toaster />
		</>
	);
}

export default ShareDialog;
