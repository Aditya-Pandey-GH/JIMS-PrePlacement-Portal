import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Courses = () => {
	window.localStorage.setItem("curPage", "coursePage");
	useEffect(() => {
		document.title = "Courses @JIMS";
	});

	const navigate = useNavigate();

	return (
		<>
			<NavBar />

			{/* <section id="about-home">
				<h2>
					Courses
				</h2>
			</section> */}

			<section id="course">
				<h1>UG & PG Courses</h1>

				<div className="course-box">
					<div
						onClick={() => {
							navigate("/courses/inner");
						}}
						className="courses"
					>
						<img src={require("../img/bba.png")} alt="" />
						<div className="details">
							<h6>Bachelor Of Business</h6>
							<h6>Administration (BBA)</h6>
						</div>
						<div className="cost">Next</div>
					</div>

					<div className="courses">
						<img src={require("../img/bca.png")} alt="" />
						<div className="details">
							<h6>Bachelor Of Computer</h6>
							<h6>Applications (BCA)</h6>
						</div>
						<div className="cost">Next</div>
					</div>

					<div className="courses">
						<img src={require("../img/baeco.jpg")} alt="" />
						<div className="details">
							<h6>Bachelors of Arts (B.A.)</h6>
							<h6>Economics (Hons.)</h6>
							{/* <h6>B.A.(Hons.)(Economics)</h6> */}
						</div>
						<div className="cost">Next</div>
					</div>

					<div className="courses">
						<img src={require("../img/mca.jpg")} alt="" />
						<div className="details">
							<h6>Master Of Computer</h6>
							<h6>Applications (MCA)</h6>
						</div>
						<div className="cost">Next</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
};

export default Courses;
