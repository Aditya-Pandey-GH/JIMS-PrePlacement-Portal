import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/contact.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Contact = () => {
	window.localStorage.setItem("curPage", "contactPage");
	useEffect(() => {
		document.title = "Contact Us";
	});

	return (
		<>
			<NavBar />
			<div className="contactNavHeight" />

			{/* <section id="about-home">
                <h2>
                    Contact Us
                </h2>
            </section> */}

			<section id="contact">
				<div className="getin">
					<h2>Get in Touch</h2>
					{/* <p>Fill the form and start a new adventure.</p> */}
					<p />

					<div className="getin-details">
						<h3>Address</h3>
						<div className="iconsMobileOnly">
							<i className="fa-solid fa-map get iconsMobileOnly" />
						</div>
						<div>
							<i className="fa-solid fa-map get iconsPCOnly" />
							<p>Rohini, Sector - 5 Delhi - 110085</p>
						</div>

						<h3>Phone</h3>
						<div className="iconsMobileOnly">
							<i className="fas fa-phone-alt get iconsMobileOnly" />
						</div>
						<div>
							<i className="fas fa-phone-alt get iconsPCOnly" />
							<p>(+91) 98671 23456</p>
						</div>

						<h3>Support</h3>
						<div className="iconsMobileOnly">
							<i className="fa-solid fa-envelope get iconsMobileOnly" />
						</div>
						<div>
							<i className="fa-solid fa-envelope get iconsPCOnly" />
							<p>contact@jimsindia.org</p>
						</div>

						<h3>Website</h3>
						<div className="iconsMobileOnly">
							<i className="fa-solid fa-globe get iconsMobileOnly" />
						</div>
						<div>
							<i className="fa-solid fa-globe get iconsPCOnly" />
							<p>
								<Link to="www.jimsindia.com">www.jimsindia.com</Link>
							</p>
						</div>
					</div>
				</div>

				<div className="formC">
					<h4>Let's Connect</h4>
					<p></p>
					<div className="form-row">
						<input type="text" placeholder="Your Name" />
						<input type="email" placeholder="Your Email" />
					</div>
					<div className="form-col">
						<input type="text" placeholder="Subject line..." />
					</div>
					<div className="form-col">
						<textarea name="" id="" cols="30" rows="8" placeholder="How can we help?"></textarea>
					</div>

					<div className="form-col">
						<button>Send Message</button>
					</div>
				</div>
			</section>

			<section id="map">
				<iframe
					title="JIMS Rohini Sector-5"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.021024491799!2d77.10625157609789!3d28.718917680151556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d014e7953d073%3A0xa1df99c8551f3812!2sJagan%20Institute%20of%20Management%20Studies%20Technical%20Campus-%20JIMS%20Rohini!5e0!3m2!1sen!2sin!4v1703142848835!5m2!1sen!2sin"
					width="800"
					height="600"
					style={{ border: "0" }}
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				/>
			</section>

			<Footer />
		</>
	);
};

export default Contact;
