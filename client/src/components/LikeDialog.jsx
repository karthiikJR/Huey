import React, { useState } from "react";
import { IoMdClose } from "../assets/icons";
import { checkForValidToken, getDataFromLocalStorage } from "../helpers/utils";
import { jwtDecode } from "jwt-decode";
import { AxiosAuth } from "../helpers/utils";

function LikeDialog({ arrayOfColors }) {
	const [paletteName, setPaletteName] = useState("");

	const storeColorPlatte = async () => {
		const colors = Array.from(arrayOfColors.map((color) => color.hex));
		const user = getDataFromLocalStorage("user");
		if (
			checkForValidToken(user) === false ||
			user === null ||
			user === undefined
		) {
			alert("Please login to save color palette");
			return;
		}
		const decoded = jwtDecode(user);
		await AxiosAuth.post("/colors/add", {
			userId: decoded.id,
			colorGroupName: paletteName,
			colors: colors,
		})
			.then((res) => {
				alert("Color palette saved successfully");
				setPaletteName("");
				closeModal();
			})
			.catch((err) => {
				alert("Error saving color palette");
				console.log(err);
			});
	};

	const closeModal = () => {
		const modal = document.getElementById("likeDialog");
		modal.close();
	};

	return (
		<dialog
			className="backdrop:bg-dark/70 w-full sm:w-fit px-4 sm:px-10 py-5 bg-dark border border-light text-light font-primary sm:top-[50%] top-[25%] left-[50%] translate-x-[-50%] translate-y-[-25%] sm:translate-y-[-50%] items-center"
			id="likeDialog"
		>
			<p className="flex gap-3 justify-between">
				Enter palette name
				<IoMdClose
					size={"1.5rem"}
					onClick={closeModal}
					className="cursor-pointer border text-light"
				/>
			</p>
			<input
				type="text"
				value={paletteName}
				onChange={(e) => setPaletteName(e.target.value)}
				className="w-full bg-light/5 my-3 px-2 py-2 rounded-lg border border-light/10 focus:border-light/20 font-secondary"
			/>
			<div>
				<button
					onClick={storeColorPlatte}
					className="w-full bg-primary py-1 rounded-lg font-primary text-dark border border-primary hover:bg-transparent hover:text-primary hover:border-primary transition-all ease-in-out"
				>
					Save
				</button>
			</div>
		</dialog>
	);
}

export default LikeDialog;
