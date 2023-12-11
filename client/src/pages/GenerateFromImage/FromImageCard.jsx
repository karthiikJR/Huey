import React from "react";
import { getContrast } from "../../helpers/utils";
import { rgbToHex } from "../../helpers/utils";
import toast, { Toaster } from "react-hot-toast";

function FromImageCard({ RGB }) {
	const hex = rgbToHex(RGB[0], RGB[1], RGB[2]);

	const copyToClipboard = (text) => {
		navigator.clipboard.writeText(text.slice(1));
		toast.success("Color copied to clipboard :)", {
			position: "bottom-center",
			className: "text-light bg-dark font-secondary",
		});
	};

	return (
		<>
			<div
				style={{ backgroundColor: hex }}
				className="relative sm:h-32 h-10 sm:w-32 w-28 cursor-pointer"
				onClick={() => copyToClipboard(hex)}
			>
				<p
					className={`${
						getContrast(hex, "#FFFFFF") < 0.333333 ? "text-white" : "text-black"
					} text-center sm:text-2xl text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
				>
					{hex.slice(1)}
				</p>
			</div>
			<Toaster />
		</>
	);
}

export default FromImageCard;
