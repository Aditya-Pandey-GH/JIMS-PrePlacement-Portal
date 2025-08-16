import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/adminLogin.css";
import AddInfo from "./AddInfo";
import axios from "axios";
import NavBar from "./NavBar";

const AdminLogin = () => {
	let navigate = useNavigate();

	useEffect(() => {
		if (window.localStorage.getItem("loggedIn") === "true") {
			navigate("/addInfo", { replace: true });
		}
		document.title = "Admin Login @JIMS";
	});

	// console.log(window.localStorage.getItem("loggedIn"));

	const adminLogin = async () => {
		let email = document.getElementById("email").value;
		let pass = document.getElementById("pass").value;

		if (email.includes("@") && email.includes(".")) {
			if (email.endsWith("@jimsindia.org")) {
				if (pass.trim() !== "") {
					let info = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users/`, {
						params: {
							email: email,
							password: pass,
						},
					});
					if (info.data !== "") {
						window.localStorage.setItem("loggedIn", "true");
						window.localStorage.setItem("email", info.data.email);
						window.localStorage.setItem("password", info.data.password);
						window.localStorage.setItem("pfp", info.data.pfp);
						window.location.href = "/addInfo";
						<AddInfo />;
					} else {
						alert("Invalid Credentials Entered.");
					}
				} else {
					alert("Please enter a password");
				}
			} else {
				alert("Please enter a valid JIMS ID");
			}
		} else {
			alert("Please enter a valid email address with @ and .");
		}
		navigate("/addInfo");
	};

	return (
		<>
			<NavBar />

			<div className="background_img">
				<div className="opacity_color">
					<div className="admin_box">
						<div className="form">
							<div className="content">
								<div className="heading">
									<h1>Admin Login</h1>
								</div>
								<div className="login">
									<label htmlFor="email">Enter Email ID</label>
									<div className="inputBox">
										<div className="image">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
												<path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
											</svg>
										</div>
										<div>
											<input id="email" name="email" type="email" />
										</div>
									</div>

									<label htmlFor="pass">Enter Password</label>
									<div className="inputBox">
										<div className="image">
											<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
												<path d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z" />
											</svg>
										</div>
										<div>
											<input
												id="pass"
												name="pass"
												type="password"
												onKeyDown={(e) => {
													if (e.key === "Enter") adminLogin();
												}}
											/>
										</div>
									</div>
								</div>
								<div className="login_btn">
									<button onClick={adminLogin}>Login</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AdminLogin;
