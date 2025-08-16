import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer>
			{/* <div className="footer-col">
				<h3>Sections</h3>
				<p>About us</p>
				<p>Placement Record</p>
				<p>Annoucnements</p>
				<p>Query</p>
			</div> */}

			<div className="footer-col">
				<h3>Credits</h3>
				<p title="Check out Aditya on LinkedIn">
					<Link to="https://www.linkedin.com/in/adipandey160903/">{"-> "}Aditya Pandey (Lead Programmer & Designer)</Link>
				</p>
				<p title="Check out Samarth on LinkedIn">
					<Link to="https://www.linkedin.com/in/samarth-gandhi-603785257/">{"-> "}Samarth Gandhi (Asst. Programmer)</Link>
				</p>
				<p title="Check out Sahil on LinkedIn">
					<Link to="https://www.linkedin.com/in/sahilkumar0209/">{"-> "}Sahil Kumar (Content Researcher)</Link>
				</p>
				<p title="Check out Ishita on LinkedIn">
					<Link to="https://www.linkedin.com/in/ishijindal/">{"-> "}Ishita Jindal (Content Writer)</Link>
				</p>
			</div>

			<div className="footer-col">
				<h3>Contact Us</h3>
				<p>Phone Number: 7827938610</p>
				<p>
					<Link to="mailto:contact@jimsindia.org">Email : contact@jimsindia.org</Link>
				</p>
				<p>Address : Sector 5, Rohini, Delhi - 110085</p>
			</div>

			<div></div>

			<div className="copyright">
				<b>
					Copyright @ {new Date().getFullYear()}
					<br />
					All Rights Reserved with JIMS
				</b>
				<div className="pro-links">
					<Link to="">
						<i className="fab fa-facebook"></i>
					</Link>
					<Link to="">
						<i className="fab fa-instagram"></i>
					</Link>
					<Link to="">
						<i className="fab fa-linkedin-in"></i>
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
