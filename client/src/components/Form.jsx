import React from "react";


function Form({
	type,
	formSubmit,
	email,
	setEmail,
	password,
	setPassword,
	username,
	setUsername,
	confirmPassword,
	setConfirmPassword,
}) {
	return (
		<form
			className="flex flex-col gap-5 w-72 h-fit font-secondary"
			onSubmit={(e) => formSubmit(e)}
		>
			<h1 className="text-3xl text-center font-primary">
				{type === "register" ? "Register" : "Login"}
			</h1>
			<input
				className="bg-light/5 px-2 py-2 rounded-lg border border-light/10 focus:border-light/20"
				type="email"
				placeholder="Email"
				value={email}
				required
				onChange={(e) => setEmail(e.target.value)}
			/>
			{type === "register" && (
				<input
					className="bg-light/5 px-2 py-2 rounded-lg border border-light/10 focus:border-light/20"
					type="text"
					placeholder="Username"
					value={username}
					required
					onChange={(e) => setUsername(e.target.value)}
				/>
			)}
			<input
				className="bg-light/5 px-2 py-2 rounded-lg border border-light/10 focus:border-light/20"
				type="password"
				placeholder="password"
				value={password}
				required
				onChange={(e) => setPassword(e.target.value)}
			/>
			{type === "register" && (
				<input
					className="bg-light/5 px-2 py-2 rounded-lg border border-light/10 focus:border-light/20"
					type="password"
					placeholder="Confirm password"
					required
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
				/>
			)}
			<button
				className={`w-full ${
					type === "register" ? "bg-primary" : "bg-orange"
				}  px-2 py-2 rounded-lg font-primary text-dark border ${
					type === "register" ? "border-primary" : "border-orange"
				} hover:bg-transparent ${
					type === "register" ? "hover:text-primary" : "hover:text-orange"
				} ${
					type === "register" ? "hover:border-primary" : "hover:border-orange"
				} transition-all ease-in-out`}
			>
				{type === "register" ? "Register" : "Login"}
			</button>
		</form>
	);
}

export default Form;
