import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/about.css";
import Footer from "./Footer";
import NavBar from "./NavBar";

import MainGate from "../img/maingate.jpg";
import FE1 from "../img/fe1.png";
import FE2 from "../img/fe2.png";
import TCS from "../img/tcs.png";
import Wipro from "../img/wipro.png";
import TataPlay from "../img/tataplay.png";
import HCL from "../img/hcl.png";
import ICICI from "../img/icici.png";
import Capegemini from "../img/capgemini.png";

const About = () => {
	window.localStorage.setItem("curPage", "aboutPage");
	useEffect(() => {
		document.title = "About JIMS Pre-Placement Cell";
	});

	return (
		<>
			<NavBar />
			<div style={{ height: "5rem" }} />

			<section id="about-home">
				<h2>
					About JIMS Pre-Placement
					<br />
					@JIMS Rohini
				</h2>
			</section>

			<section id="about-container">
				<div className="about-img">
					<img src={MainGate} alt="" />
				</div>
				<div className="about-text">
					<h2>Welcome to Placement Cell Of JIMS</h2>
					{/* <br /> */}
					<h6>Take advantage of our comprehensive career resources section.</h6>
					<p>Here you can find insightful activities, interview tips, lectures, placement oppurtunities, and industry-specific insights.</p>
					<div className="about-fe">
						<img src={FE1} alt="" />
						<div className="fe-text">
							<h5>Community Hub</h5>
							<p>
								Connect with fellow students of JIMS to explore a world of pre-placement and placement opportunities, Your gateway to discussions, insights, and a network that propels
								your career forward.
							</p>
						</div>
					</div>
					<div className="about-fe">
						<img src={FE2} alt="" />
						<div className="fe-text">
							<h5>Lifetime Information</h5>
							<p>Access to faculty lectures, guest talks, activities, and placement records, The key to continuous learning and staying connected with the wealth of information.</p>
						</div>
					</div>
				</div>
			</section>

			<section id="trust">
				<h1>Trusted By</h1>
				<p>Top Companies Find Tomorrow's Brightest Stars!</p>
				<div className="trust-img">
					<img src={TCS} alt="" />
					<img src={Wipro} alt="" />
					<img src={TataPlay} alt="" />
					<img src={HCL} alt="" />
					<img src={ICICI} alt="" />
					<img src={Capegemini} alt="" />
				</div>
			</section>

			<Footer />
		</>
	);
};

export default About;
