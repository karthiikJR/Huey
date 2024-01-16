import React, { useState } from "react";
import Layout from "../components/sharedComponents/Layout";
import Form from "../components/Form";
import useAuth from "../hooks/useAuth";
import Loading from "../components/Loading";

function Auth() {
	const {
		email,
		setEmail,
		password,
		setPassword,
		loginEmail,
		setLoginEmail,
		loginPassword,
		setLoginPassword,
		username,
		setUsername,
		confirmPassword,
		setConfirmPassword,
		loading,
		setLoading,
		login,
		register,
	} = useAuth();
	if (loading) return <Loading />;
	return (
		<Layout>
			<div className="w-full text-light py-10 min-h-[calc(100vh-4rem)] flex flex-wrap items-center justify-center gap-20 bg-dark">
				<Form
					type={"register"}
					email={email}
					setEmail={setEmail}
					password={password}
					setPassword={setPassword}
					formSubmit={register}
					username={username}
					setUsername={setUsername}
					confirmPassword={confirmPassword}
					setConfirmPassword={setConfirmPassword}
				/>
				<Form
					type={"login"}
					email={loginEmail}
					setEmail={setLoginEmail}
					password={loginPassword}
					setPassword={setLoginPassword}
					formSubmit={login}
				/>
			</div>
		</Layout>
	);
}

export default Auth;
