import React from "react";
import MenuButton from "../MenuButton";
import { Link, useNavigate } from "react-router-dom";
import { toggleButton } from "../../helpers/utils";

function Navbar() {
	const navigate = useNavigate();
	return (
		<div className=" overflow-x-hidden">
			<nav className="z-50 w-full fixed sm:px-10 bg-dark border-b border-light/10 font-primary text-light h-16 flex justify-between items-center">
				<div
					onClick={() => {
						navigate("/");
					}}
					className=" p-3 flex gap-3 h-full items-center cursor-pointer w-fit "
				>
					<img src="/Logo_huey.png" alt="Logo" className="h-[3rem] " />
					<h3 className="text-xl tracking-[0.7rem] inline-block ">Huey</h3>
				</div>
				<MenuButton />
			</nav>

			<div
				id="hamburgerMenu"
				className="translate-x-full opacity-0 z-40 fixed w-full h-full pt-20 flex flex-col justify-between text-light bg-dark transition-all duration-700"
			>
				<div className="w-full h-20 "></div>
				<div
					id="HamgburgerLinks"
					className="w-full  p-10 flex flex-col gap-5 justify-center items-start text-5xl font-primary tracking-wide"
				>
					<Link
						onClick={toggleButton}
						className="hover:text-primary  transition-transformAndopacity hover:tracking-widest opacity-0 translate-y-20 delay-500"
						to="/"
					>
						Home
					</Link>
					<Link
						onClick={toggleButton}
						className="hover:text-orange  transition-transformAndopacity hover:tracking-widest opacity-0 translate-y-20 delay-[0.6s]"
						to="/profile"
					>
						Profile
					</Link>
					<Link
						onClick={toggleButton}
						className="hover:text-light/20  transition-transformAndopacity hover:tracking-widest opacity-0 translate-y-20 delay-[0.7s]"
						to="/about"
					>
						About
					</Link>
					<Link
						onClick={toggleButton}
						className="hover:text-green  transition-transformAndopacity hover:tracking-widest opacity-0 translate-y-20 delay-[0.8s]"
						to="/generate"
					>
						Generate
					</Link>
				</div>
				<div className="w-full h-20 bg-gradient-to-l from-primary to-light"></div>
			</div>
		</div>
	);
}

export default Navbar;
