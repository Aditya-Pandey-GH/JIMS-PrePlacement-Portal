import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

import CyberSec from "../img/cybersec.jpg";

const ActReadMore = () => {
	const navigate = useNavigate();
	const goBackAndClearForwardHistory = () => {
		// Perform navigation to go back one step
		navigate(-1);

		// Clear forward history
		window.history.replaceState(null, "", window.location.href);
	};
	return (
		<>
			<NavBar />
			<div className="actNavHeight" />

			{/* <div id="blog-container">
				<div className="blogs blogpost1">
					<div className="post">
						<img src={require("../img/cybersec.jpg")} alt="" />
						<h3>Cyber Security - Guest Lecture</h3>
						<p>
							The objective of this workshop is to make students develop skills related to database design. Also, this event is designed in a manner that students learn and implement
							immediately in the competition.
						</p>

						<p>
							1. Cyber Awareness: Introducing students to the course of Cybersecurity, giving them awareness in protecting personal and a company's data. While maintaining an online
							privacy and explaining the reason for requirement of more IT jobs in the sector. <br />
							2. Cybersecurity Essentials: It covered up the foundational knowledge and essential skills required for all the cybersecurity domains also including the techniques of
							defence and mitigation used in protecting businesses.
						</p>

						<p>
							The Introduction to Cybersecurity course explores cyber trends, threats and staying safe in cyberspace, and protecting personal and company data, Learn how to protect your
							personal data and privacy online and in social media, and why more and more IT jobs require cybersecurity awareness and understanding.
							<br />
							Covers foundational knowledge and essential skills for all cybersecurity domains including information security, systems security, network security, ethics and laws, and
							defence and mitigation techniques used in protecting businesses.
						</p>

						<br />
					</div>
				</div>
			</div> */}

			<section id="blog-container">
				<div className="blogs blogPost">
					<div className="post">
						<img src={CyberSec} alt="" />
						<div className="postText">
							<h3>Cyber Security - Guest Lecture</h3>
							<p>
								The objective of this workshop is to make students develop skills related to database design. Also, this event is designed in a manner that students learn and implement
								immediately in the competition.
							</p>

							<p>
								1. Cyber Awareness: Introducing students to the course of Cybersecurity, giving them awareness in protecting personal and a company's data. While maintaining an online
								privacy and explaining the reason for requirement of more IT jobs in the sector. <br />
								2. Cybersecurity Essentials: It covered up the foundational knowledge and essential skills required for all the cybersecurity domains also including the techniques of
								defence and mitigation used in protecting businesses.
							</p>

							<p>
								The Introduction to Cybersecurity course explores cyber trends, threats and staying safe in cyberspace, and protecting personal and company data, Learn how to protect
								your personal data and privacy online and in social media, and why more and more IT jobs require cybersecurity awareness and understanding.
								<br />
								Covers foundational knowledge and essential skills for all cybersecurity domains including information security, systems security, network security, ethics and laws,
								and defence and mitigation techniques used in protecting businesses.
							</p>

							<br />
							{/* <Link to="/activities/post">Read More</Link> */}
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
};

export default ActReadMore;
