import React, { useEffect, useState } from "react";
import Layout from "../components/sharedComponents/Layout";
import {
	getDataFromLocalStorage,
	removeDataFromLocalStorage,
	AxiosAuth,
} from "../helpers/utils";
import { useNavigate } from "react-router-dom";
import avatar_icon from "../assets/avatar_icon.svg";
import { jwtDecode } from "jwt-decode";
import { getContrast } from "../helpers/utils";
import { MdDelete, IoIosOpen } from "../assets/icons";
import toast, { Toaster } from "react-hot-toast";

function Profile() {
	const user = getDataFromLocalStorage("user");
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [palettes, setPalettes] = useState([]);
	useEffect(() => {
		if (user === null || user === undefined) {
			navigate("/auth");
			return;
		}
		const decoded = jwtDecode(user);
		setUsername(decoded.username);
		// refreshPalettes();
	}, []);

	useEffect(() => {
		refreshPalettes();
	}, [username]);

	const refreshPalettes = async () => {
		try {
			const decoded = jwtDecode(user);
			const response = await AxiosAuth.get("/colors/get?userId=" + decoded.id);

			// Assuming each palette has a unique 'id'
			const newPalettes = response.data;

			// Update the state by replacing existing palettes with new ones
			setPalettes((prevPalettes) => {
				// Filter out palettes that are deleted
				const updatedPalettes = prevPalettes.filter((existingPalette) =>
					newPalettes.some((newPalette) => newPalette.id === existingPalette.id)
				);

				// Add new palettes
				return [...newPalettes];
			});
		} catch (error) {
			console.error("Error refreshing palettes:", error);
		}
	};


	const openGenerator = (color) => {
		navigate("/generate/" + color.map((c) => c.split("#")[1]).join("-"));
	};

	const copyToClipboard = (text) => {
		navigator.clipboard.writeText(text);
		toast.success("Color copied to clipboard :)", {
			position: "bottom-center",
			className: "text-light bg-dark font-secondary",
		});
	};

	const deleteColor = async (id) => {
		const response = await AxiosAuth.delete("/colors/delete", {
			data: {
				colorId: id,
			},
		});
		if (response.status === 200) refreshPalettes((prev) => !prev.id !== id);
	};

	const logoutUser = async () => {
		await AxiosAuth.get("/auth/logout")
			.then((response) => {
				console.log(response);
				removeDataFromLocalStorage("user");
				navigate("/");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<Layout>
			<Toaster />
			<div className="w-full min-h-[calc(100vh-4rem)] sm:px-20 sm:py-10 p-5 bg-dark text-light font-primary justify-center">
				<section className="w-full flex flex-col p-5 gap-5 items-center justify-center bg-light/5 border border-light/5 rounded-xl font-secondary">
					<img
						src={avatar_icon}
						alt="user icon"
						className="sm:w-36 sm:h-36 w-28 h-28"
					/>

					<h1 className="sm:text-4xl text-2xl font-bold block">{username}</h1>

					<button
						onClick={logoutUser}
						className="bg-dark px-4 py-2 rounded-lg border border-light/20 hover:bg-transparent transition-all"
					>
						Logout
					</button>
				</section>
				<section>
					<h1 className="sm:text-4xl text-2xl py-5">Color Palettes</h1>
					<div className="flex flex-wrap gap-10 justify-center lg:justify-normal">
						{palettes?.map((palette) => (
							<section
								className="flex flex-col px-4 py-2 gap-2"
								key={palette.id}
							>
								<div className="w-80 h-28 flex flex-row rounded-lg overflow-hidden">
									{palette?.listOfColors?.map((color, index) => (
										<div
											key={index}
											className="group w-full h-full flex justify-center items-center flex-1 hover:flex-[2] transition-all cursor-pointer"
											style={{ backgroundColor: color }}
											onClick={() => copyToClipboard(color)}
										>
											<p
												className={`hidden group-hover:block transition-all ${
													getContrast(color, "#FFFFFF") < 0.333333
														? "text-white"
														: "text-black"
												}`}
											>
												{color.split("#")[1]}
											</p>
										</div>
									))}
								</div>
								<div className="relative flex justify-between">
									<h1 className="text-sm font-secondary">{palette.name}</h1>
									<div className="flex gap-2 self-end">
										<MdDelete
											className="text-xl cursor-pointer"
											onClick={() => deleteColor(palette.id)}
										/>
										<IoIosOpen
											className="text-xl cursor-pointer"
											onClick={() => openGenerator(palette.listOfColors)}
										/>
									</div>
								</div>
							</section>
						))}
					</div>
				</section>
			</div>
		</Layout>
	);
}

export default Profile;
