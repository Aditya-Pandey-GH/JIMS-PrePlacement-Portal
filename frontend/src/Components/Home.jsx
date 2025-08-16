import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import Footer from "./Footer";
import NavBar from "./NavBar";
import "./css/style.css";

import Wipro from "../img/wipro.png";
import Deloitte from "../img/Deloitte.png";
import TCS from "../img/tcs.png";
import Amul from "../img/amul.png";

const Home = () => {
	window.localStorage.setItem("curPage", "homePage");

	useEffect(() => {
		document.title = "Pre-Placement Portal @JIMS";
	});

	return (
		<>
			<NavBar />

			<section id="home">
				<h2 style={{ marginBottom: "2.5rem" }}>
					Pre-Placement Cell
					<br />
					@JIMS Rohini
				</h2>
				<p>
					{/* Chart Your Success Story:  */}
					Welcome to JIMS Pre-Placement Portal - Your Gateway to Tomorrow's Thriving Careers!
				</p>
				<div className="btn">
					<Link to="#alerts">
						<button className="btnButtons blue">Learn More</button>
					</Link>
					{/* <Link to="">
						<button className="btnButtons yellow">Placement Portal</button>
					</Link> */}
				</div>
			</section>

			<section id="announcements">
				<div className="announcement" id="alerts">
					{/* <div className='announcementCol'> */}
					<h2>Important Alerts...</h2>
					{/* </div> */}
					<div className="announcementCol">
						<div className="scrolling-content">
							<p>The Career Development Centre has hosted a virtual briefing session on 14th December 2023 for BCA Batch.</p>
							<p>Deloitte is arranging a Leadership Talk, on 14th December for BCA Batch.</p>
							<p>Handholding session on digital marketing on 10th December 2023 for all Courses.</p>
							<p>Masterclass on Data Structures & Algorithms using C++ on 30th December 2023.</p>
							<p>Virtual Interview Preparation session for final HR round (9 students)- Uneecops</p>
							<p>Virtual Interview Preparation session for- NCR</p>
							<p>Virtual Interview Preparation session for- Publicis Sapient</p>
							<p>Virtual Interview Preparation session - Hive AI</p>
							<p>Interview preparation session - BigOh Notation</p>
							<p>Webinar on overseas education- Open the doors to a global career with an International degree after graduation</p>
						</div>
					</div>
				</div>
				<div className="announcement" id="alerts">
					{/* <div className='announcementCol'> */}
					<h2>Important Links...</h2>
					{/* </div> */}
					<div className="announcementCol">
						<div className="scrolling-content">
							<p>
								Deloitte Placement Assistance Session:
								<br />
								<Link to="https://meet.google.com/jjk-eujn-eht" className="important">
									https://meet.google.com/jjk-eujn-eht
								</Link>
							</p>
							<p>Application form to be a new voter (National Voter's Service Portal)</p>
							<p>Deloitte is arranging a Leadership Talk, on 14th December for BCA Batch.</p>
							<p>Handholding session on digital marketing on 10th December 2023 for all Courses.</p>
							<p>Masterclass on Data Structures & Algorithms using C++ on 30th December 2023.</p>
							<p>Virtual Interview Preparation session for final HR round (9 students)- Uneecops</p>
							<p>Virtual Interview Preparation session for- NCR</p>
							<p>Virtual Interview Preparation session for- Publicis Sapient</p>
							<p>Virtual Interview Preparation session - Hive AI</p>
						</div>
					</div>
				</div>
			</section>

			<section id="features">
				<h1>Resource Hub</h1>

				<div className="fea-base">
					<div className="fea-box">
						<i className="fas fa-graduation-cap"></i>
						<Link
							to="https://whatsapp.com/channel/0029VaHi2x4BFLgVzku1NR1n"
							target="_blank"
							style={{ float: "right", fontSize: "large", fontWeight: "bold" }}
						>
							Join
						</Link>
						<h3>Community Support</h3>
						<p>Join our Community for latest placement activities and updates</p>
					</div>

					<div className="fea-box">
						<i className="fa-solid fa-book-bookmark"></i>
						<h3>Latest Lectures</h3>
						<p>Check out Latest lectures and information from our esteemed faculty</p>
					</div>

					<div className="fea-box">
						<i className="fas fa-award"></i>
						<Link
							to="https://www.jimsindia.org/downloadform/JIMS-IPU-Information-Brochure.pdf"
							target="_blank"
							style={{ float: "right", fontSize: "large", fontWeight: "bold" }}
						>
							Join
						</Link>
						<h3>Brochure & Information Booklet</h3>
						<p>Download the broshure and information booklet for our placement cell</p>
					</div>
				</div>
			</section>

			<section id="registration">
				<div className="reminder">
					<p>Contact us for further information and doubts</p>
					<h1>Feel free to contact us for any query</h1>
				</div>

				<div className="formH">
					<h3>Have a query? Contact Us</h3>

					<input type="text" placeholder="Name" name="" id="" />
					<input type="email" placeholder="Email ID" name="" id="" />
					<input type="text" placeholder="Contact Number" name="" id="" />

					<div className="btn">
						<Link to="#" className="yellow">
							Submit Form
						</Link>
					</div>
				</div>
			</section>

			<section id="experts">
				<h1>Top Recruiters</h1>
				<p>Meet our Esteemed Placements partners</p>
				<div className="expert-box">
					<div className="profile">
						<img src={Wipro} alt="" />
						<h6>Wipro Technologies</h6>
						<p>2022 Batch</p>
						<div className="pro-links">
							<i className="fab fa-facebook"></i>
							<i className="fab fa-instagram"></i>
							<i className="fab fa-linkedin-in"></i>
						</div>
					</div>

					<div className="profile">
						<img src={Deloitte} alt="" />
						<h6>Delloite Technologies</h6>
						<p>2022 Batch</p>
						<div className="pro-links">
							<i className="fab fa-facebook"></i>
							<i className="fab fa-instagram"></i>
							<i className="fab fa-linkedin-in"></i>
						</div>
					</div>

					<div className="profile">
						<img src={TCS} alt="" />
						<h6>Tata Consultancy Services</h6>
						<p>2022 Batch</p>
						<div className="pro-links">
							<i className="fab fa-facebook"></i>
							<i className="fab fa-instagram"></i>
							<i className="fab fa-linkedin-in"></i>
						</div>
					</div>

					<div className="profile">
						<img src={Amul} alt="" />
						<h6>Anand Milk Union Limited</h6>
						<p>2023 batch</p>
						<div className="pro-links">
							<i className="fab fa-facebook"></i>
							<i className="fab fa-instagram"></i>
							<i className="fab fa-linkedin-in"></i>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
};

export default Home;
