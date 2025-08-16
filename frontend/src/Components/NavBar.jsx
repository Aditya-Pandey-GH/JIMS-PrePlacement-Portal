import React from "react";
import { Link } from "react-router-dom";
import LogOut from "./LogOut";

import Logo from "../img/logo.png";
import Menu from "../img/menu.png";

const NavBar = () => {
	return (
		<>
			<nav>
				<Link to="/">
					<img src={Logo} className="logo" alt="" />
				</Link>

				<div className="navigation">
					<ul style={{ marginBottom: "0" }}>
						<i id="menu-close" className="fas fa-times"></i>
						<li>
							<Link to="/" className={window.localStorage.getItem("curPage") == "homePage" ? "active" : ""}>
								Home
							</Link>
						</li>
						<li>
							<Link to="/activities" className={window.localStorage.getItem("curPage") == "activityPage" ? "active" : ""}>
								Activities
							</Link>
						</li>
						{/* <li>
							<Link to="/courses" className={window.localStorage.getItem("curPage") == "coursePage" ? "active" : ""}>
								Courses
							</Link>
						</li> */}
						<li>
							<Link to="/about" className={window.localStorage.getItem("curPage") == "aboutPage" ? "active" : ""}>
								About Us
							</Link>
						</li>
						<li>
							<Link to="/contact" className={window.localStorage.getItem("curPage") == "contactPage" ? "active" : ""}>
								Contact Us
							</Link>
						</li>
						{/* <li>
							<Link to="/adminLogin">
								{window.localStorage.getItem("pfp") === "undefined" || window.localStorage.getItem("pfp") === "" || window.localStorage.getItem("pfp") === null ?
									<i className="fa-regular fa-circle-user" style={{ "zoom": "300%" }} /> :
									<img src={window.localStorage.getItem("pfp")}
										className="logo"
										alt=""
										style={{
											width: "3rem",
											height: "3rem",
											borderRadius: "50%",
											border: "2px solid black"
										}}
									/>
								}
							</Link>
						</li> */}
						<li className="signindropdown">
							{window.localStorage.getItem("pfp") === "undefined" ||
							window.localStorage.getItem("pfp") === "" ||
							window.localStorage.getItem("pfp") === null ? (
								<>
									<Link to="/adminLogin">
										<i className="fa-regular fa-circle-user" style={{ zoom: "300%" }} />
									</Link>
								</>
							) : (
								<>
									<img
										src={window.localStorage.getItem("pfp")}
										className="logo"
										alt=""
										style={{
											width: "3rem",
											height: "3rem",
											// borderRadius: "0.25rem",
											borderRadius: "50%",
											// border: "2px solid black",
											outline: "2px solid black",
											boxShadow: "2.5px 5px 10px rgba(0, 0, 0, 0.5)",
										}}
									/>
									<div className="signinopts">
										<Link to="/addInfo">
											<p>Profile</p>
										</Link>
										<Link onClick={LogOut}>
											<p>Logout</p>
										</Link>
									</div>
								</>
							)}
						</li>
					</ul>

					<div className="signindropdown">
						<img src={Menu} id="menu-btn" alt="" />
						<div className="signinopts" style={{ fontWeight: "500" }}>
							<Link to="/">
								<p>
									<img
										src="https://www.iconarchive.com/download/i103430/paomedia/small-n-flat/house.1024.png"
										style={{ width: "2rem", marginRight: "1rem" }}
									/>
									Home
								</p>
							</Link>
							<Link to="/activities">
								<p>
									<img
										src="https://cdn-icons-png.flaticon.com/512/2686/2686454.png"
										style={{ width: "2rem", marginRight: "1rem" }}
									/>
									Activities
								</p>
							</Link>
							{/* <Link to="/courses">
								<p>
									<img src="https://cdn-icons-png.flaticon.com/512/4762/4762311.png" style={{ width: "2rem", marginRight: "1rem" }} />
									Courses
								</p>
							</Link> */}
							<Link to="/about">
								<p>
									<img
										src="https://cdn-icons-png.freepik.com/512/3357/3357329.png"
										style={{ width: "2rem", marginRight: "1rem" }}
									/>
									About Us
								</p>
							</Link>
							<Link to="/contact">
								<p>
									<img
										src="https://cdn-icons-png.flaticon.com/512/9239/9239182.png"
										style={{ width: "2rem", marginRight: "1rem" }}
									/>
									Contact Us
								</p>
							</Link>

							{window.localStorage.getItem("pfp") === "undefined" ||
							window.localStorage.getItem("pfp") === "" ||
							window.localStorage.getItem("pfp") === null ? (
								<>
									<Link to="/adminLogin">
										<p>
											<img
												src="https://www.freeiconspng.com/thumbs/login-icon/login-icon-png-27.png"
												style={{ width: "2rem", marginRight: "1rem" }}
											/>
											Login
										</p>
									</Link>
								</>
							) : (
								<>
									<Link to="/addInfo">
										<p>
											<img
												src={window.localStorage.getItem("pfp")}
												style={{ width: "2rem", marginRight: "1rem", borderRadius: "50%" }}
											/>
											Profile
										</p>
									</Link>
									<Link onClick={LogOut}>
										<p>
											<img
												src="https://cdn-icons-png.flaticon.com/512/3541/3541892.png"
												style={{ width: "2rem", marginRight: "1rem", borderRadius: "50%" }}
											/>
											Logout
										</p>
									</Link>
								</>
							)}
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default NavBar;
