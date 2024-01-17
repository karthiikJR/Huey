import React from "react";
import toast, { Toaster } from "react-hot-toast";
import noise from "../assets/noise.svg";

function GradientCard({ id }) {
	const gradientStyles = [
		{
			id: 1,
			style: `linear-gradient(0.33turn, #3f87a6, #ebf8e1, #f69d3c, #561423)`,
		},
		{
			id: 2,
			style: `radial-gradient(ellipse at 100% 100%, rgb(179 154 245 / 1) 8.33%, rgb(179 154 245 / 0) 67.36%) 101.38% 100% / 56.4% 47.4% no-repeat no-repeat,  radial-gradient(ellipse at 0% 0%, rgb(255 150 101 / 1) 0%,  19.1%, rgb(69 168 255 / 0) 72.92%) 0% 0% / 54.2% 42.4% no-repeat no-repeat,  radial-gradient(ellipse at 100% 0%, rgb(82 145 255 / 1) 0%, rgb(255 96 53 / 1) 68.4%, rgb(69 168 255 / 0) 85.42%) 100.52% -0.58% / 61.2% 65.6% no-repeat no-repeat,  radial-gradient(ellipse at 0% 100%, rgb(255 15 82 / 1) 0%, rgb(254 87 131 / 1) 37.85%, rgb(255 96 53 / 1) 54.17%) 60% 100% / 101% 100.2% no-repeat no-repeat`,
		},
		{
			id: 3,
			style: `radial-gradient(ellipse at 100% 100%, rgb(80 63 191 / 1) 0%,  35.42%, rgb(69 168 255 / 0) 59.03%) 109.23% 102.94% / 45.8% 86.4% no-repeat no-repeat,  radial-gradient(ellipse at 50% 100%, rgb(4 164 196 / 1) 12.15%, rgb(69 136 245 / 1) 39.24%, rgb(255 255 255 / 0) 69.1%) 9.24% 99.45% / 136.8% 63.4% no-repeat no-repeat,  radial-gradient(ellipse at 0% 100%, rgb(148 67 230 / 1) 20.83%,  54.51%, rgb(255 255 255 / 0) 78.47%) -1.23% 200% / 67.6% 100% no-repeat no-repeat,  linear-gradient(0deg, rgb(61 147 252 / 1) 0%,  25%, rgb(0 36 107 / 1) 75.35%) 0% 66.67% / 100.6% 101.2% no-repeat no-repeat`,
		},
		{
			id: 4,
			style: `radial-gradient(ellipse at 0% 100%, rgb(255 96 53 / 1) 25.69%, rgb(0 0 0 / 0) 65%) -1.92% 133.33% / 89.6% 98.8% no-repeat no-repeat,  radial-gradient(ellipse at 0% 0%, rgb(98 72 243 / 1) 21%, rgb(0 0 0 / 0) 65%) -1.39% 0% / 71.2% 69.8% no-repeat no-repeat, /* New Background (copy) */ linear-gradient(0deg, rgb(255 96 53 / 1) 0%,  31.94%, rgb(73 143 254 / 1) 76%, rgb(255 255 255 / 0) 100%) 0% 100% / 100% 68.4% no-repeat no-repeat,  linear-gradient(rgb(72 144 255 / 1), rgb(72 144 255 / 1)) 0% 0% / 102% 99.6% no-repeat no-repeat`,
		},
		{
			id: 5,
			style: `conic-gradient(from 0deg at 50% 50%, rgb(255 140 33 / 1) 0%, rgb(243 110 29 / 1) 25.69%, rgb(226 69 61 / 1) 49.65%, rgb(228 73 57 / 1) 72.57%, rgb(206 39 21 / 1) 99.31%) 0% 0% / 100.6% 100.6% no-repeat no-repeat`,
		},
		{
			id: 6,
			style: `radial-gradient(ellipse at 100% 100%, rgb(218 43 56 / 1) 0%, rgb(69 168 255 / 0) 65.97%) 0% 0% / 100% 100% no-repeat no-repeat,  radial-gradient(ellipse at 100% 50%, rgb(0 92 181 / 1) 0%, rgb(100 121 135 / 0) 50%) 0% 0% / 100% 100% no-repeat no-repeat, /* New Background (copy) */ radial-gradient(ellipse at 30% 40%, rgb(0 92 181 / 1) 0%, rgb(100 121 135 / 0) 44.44%) 0% 0% / 100% 100% no-repeat no-repeat,  linear-gradient(8deg, rgb(218 43 56 / 1) 0%, rgb(235 112 73 / 1) 8%, rgb(234 156 72 / 1) 18%, rgb(235 147 73 / 1) 22%, rgb(234 156 72 / 0) 45%) 0% 0% / 100% 100% no-repeat no-repeat,  radial-gradient(ellipse at 70% 40%, rgb(0 92 181 / 1) 0%, rgb(0 48 135 / 1) 70%) 0% 0% / 100% 100% no-repeat no-repeat`,
		},
	];

	const copyToClipboard = (text) => {
		navigator.clipboard.writeText(text);
		toast.success("CSS Gradient copied :)", {
			position: "bottom-center",
			className: "text-light bg-dark font-secondary",
		});
	};

	return (
		<>
			<div
				onClick={() => copyToClipboard(gradientStyles[id].style)}
				className="relative w-80 h-96 self-center font-primary cursor-pointer"
				style={{
					background: gradientStyles[id].style,
				}}
			>
				{" "}
				<img
					className="absolute top-0 w-full h-full opacity-30"
					src={noise}
					alt="noise"
				/>
			</div>
			<Toaster />
		</>
	);
}

export default GradientCard;
