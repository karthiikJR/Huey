import { useState } from "react";
import axios from "axios";
import { setDataToLocalStorage } from "../helpers/utils";
import { useNavigate } from "react-router-dom";
axios.create({
	baseURL: "https://huey-backend.onrender.com",
	withCredentials: true,
});

function useAuth() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [loading, setLoading] = useState(false);

	const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");

	const register = (e) => {
		setLoading(true);
		e.preventDefault();
		if (password !== confirmPassword) {
			setLoading(false);
			return alert("Passwords do not match");
		}

		axios
			.post("/auth/register", {
				email,
				password,
				username,
			})
			.then((res) => {
				setLoading(false);
				setDataToLocalStorage("user", res.data);
				navigate("/profile");
			})
			.catch((error) => {
				setLoading(false);
				console.log(error.response.data.message);
			});
	};

	const login = (e) => {
		setLoading(true);
		e.preventDefault();
		axios
			.post("/auth/login", {
				email: loginEmail,
				password: loginPassword,
			})
			.then((res) => {
				setDataToLocalStorage("user", res.data);
				setLoading(false);
				navigate("/profile");
			})
			.catch((error) => {
				setLoading(false);
				console.log(error.response.data.message);
			});
	};

	return {
		email,
		setEmail,
		password,
		setPassword,
		username,
		setUsername,
		confirmPassword,
		setConfirmPassword,
		loginEmail,
		setLoginEmail,
		loginPassword,
		setLoginPassword,
		register,
		login,
		loading,
		setLoading,
	};
}

export default useAuth;
