import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/activities.css";
import Footer from "./Footer";
import NavBar from "./NavBar";

import GuestLec from "../img/guestlec.jpeg";
import Interview from "../img/interview.jpg";
import Internship from "../img/internship.jpg";
import PreDrive from "../img/predrive.jpg";
import JimsEvents from "../img/jimsevents.jpg";

const Activities = () => {
	window.localStorage.setItem("curPage", "activityPage");
	useEffect(() => {
		document.title = "Activities @JIMS";
	});

	const navigate = useNavigate();

	const handleReadMore = (activityName) => {
		localStorage.activityName = activityName;
		navigate("/activities/post");
	};

	return (
		<>
			<NavBar />
			<div className="actNavHeight" />

			<section id="about-home">
				<h2>
					Pre-Placement Activities
					<br />
					@JIMS Rohini
				</h2>
			</section>

			<section id="blog-container">
				<div className="blogs">
					<div className="post">
						<img src={GuestLec} alt="" />
						<div className="postText">
							<h3>Guest Lectures</h3>
							<p>
								Gear up for success with our exclusive Pre-Placement Guest Lectures, Industry experts share key insights on resume building, interview strategies, and career
								essentials. Get ready to excel in the professional arena with knowledge that goes beyond the classroom.
							</p>
							<button
								onClick={() => {
									handleReadMore("Guest");
								}}
							>
								Know More
							</button>
						</div>
					</div>

					<div className="post">
						<img src={Interview} alt="" />
						<div className="postText">
							<h3>Mock Interviews</h3>
							<p>
								Prepare for success with our Mock Interview Sessions, Receive valuable feedback and guidance from experienced professionals to boost your confidence and readiness for
								real-world interviews. Start your journey towards a successful career with us!
							</p>
							<button
								onClick={() => {
									handleReadMore("Mock");
								}}
							>
								Know More
							</button>
						</div>
					</div>

					<div className="post">
						<img src={Internship} alt="" />
						<div className="postText">
							<h3>Internship Oppurtunities</h3>
							<p>We facilitate connections with industry partners to provide valuable hands-on learning. Take the first step towards a practical and successful career with us!</p>
							<button
								onClick={() => {
									handleReadMore("Internship");
								}}
							>
								Know More
							</button>
						</div>
					</div>

					<div className="post">
						<img src={PreDrive} alt="" />
						<div className="postText">
							<h3>Pre-Placement Drives</h3>
							<p>
								We bring leading companies to your doorstep, offering exclusive opportunities for interviews and recruitment. Recent drives have included renowned firms such as
								Deloitte and Amul.
							</p>
							<button
								onClick={() => {
									handleReadMore("Drives");
								}}
							>
								Know More
							</button>
						</div>
					</div>

					<div className="post">
						<img src={JimsEvents} alt="" />
						<div className="postText">
							<h3>Events</h3>
							<p>From workshops to seminars, we provide platforms for hands-on learning and industry insights. Elevate your understanding and skills within your field of study.</p>
							<button
								onClick={() => {
									handleReadMore("Events");
								}}
							>
								Know More
							</button>
						</div>
					</div>
				</div>

				{/* <div className="cate">
					<h2>Categories</h2>
					<hr />
					<Link to="">Guest Lectures</Link>
					<hr />
					<Link to="">Mock Interviews</Link>
					<hr />
					<Link to="">Internship Opportunities</Link>
					<hr />
					<Link to="">Pre-Placement Drives</Link>
					<hr />
					<Link to="">Events</Link>
					<hr />
				</div> */}
			</section>

			<Footer />
		</>
	);
};

export default Activities;
