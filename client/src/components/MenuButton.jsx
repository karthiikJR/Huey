import React from "react";
import { GoPlus } from "../assets/icons";
import { toggleButton } from "../helpers/utils";

function MenuButton() {
	return (
		<button
			onClick={toggleButton}
			className="mx-5 font-secondary group w-12 h-12 border border-dashed hover:border-dotted transition-all flex justify-center items-center"
		>
			<GoPlus
				size={"0.8rem"}
				id="plusIcon"
				className="group-hover:scale-[3.5] transition-all "
			/>
		</button>
	);
}

export default MenuButton;
