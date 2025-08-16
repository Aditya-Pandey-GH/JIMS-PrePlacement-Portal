import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";

function Create() {
	let navigate = useNavigate();

	useEffect(() => {
		if (window.localStorage.getItem("loggedIn") !== "true") {
			navigate("/adminLogin", { replace: true });
		}
		document.title = "Admin Login @JIMS";
	});

	const [title, setTitle] = useState("");
	const [link, setLink] = useState("");
	const [category, setCategory] = useState("");
	const [description, setDescription] = useState("undefined");

	const handleSubmit = async (e) => {
		e.preventDefault();

		let a = title,
			b = link,
			c = category,
			d = description,
			dnt = new Date();

		if (title.trim() === "" || link.trim() === "" || category.trim() === "") {
			alert("Invalid input. Please fill in all fields.");
			return;
		}

		// if (category === "Image" || category === "Document") {
		// 	if (title === "" || link === "" || category === "" || description === "") {
		// 		alert("Invalid input. Please fill in all fields.");
		// 		return;
		// 	}
		// } else {
		// 	if (title === "" || link === "" || category === "") {
		// 		alert("Invalid input. Please fill in all fields.");
		// 		return;
		// 	}
		// }

		const formData = {
			id: dnt.getTime(),
			title: a,
			link: b,
			category: c,
			description: d,
			dnt: dnt,
		};

		try {
			await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/acts/`, formData);
		} catch (err) {
			console.error("Error: ", err);
		}

		navigate("/AddInfo");
	};

	const options = [
		{ value: undefined, label: "Category", hidden: true },
		{ value: "Image", label: "Image" },
		{ value: "Video", label: "Video" },
		{ value: "Document", label: "Document" },
	];

	return (
		<>
			<NavBar />

			<div className="d-flex align-items-center justify-content-center vh-100">
				<Form className="w-50 p-4" style={{ border: "3px solid #04396C", borderRadius: "12px" }}>
					<h2 className="mb-4 text-center">Create New Activity</h2>

					<Form.Group className="mb-3" controlId="formBasicTitle">
						<Form.Control onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter Title" required />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicLink">
						<Form.Control onChange={(e) => setLink(e.target.value)} type="text" placeholder="Link" required />
					</Form.Group>

					{/* Category Starts */}
					<Form.Group className="mb-3" controlId="formBasicCategory">
						<Form.Select onChange={(e) => setCategory(e.target.value)} placeholder={"Category"} required>
							{options.map((option) => (
								<option key={option.label} value={option.value} hidden={option.hidden}>
									{option.label}
								</option>
							))}
						</Form.Select>
					</Form.Group>
					{/* Category Ends */}

					{/* {(category === "Image" || category === "Document") && (
						<Form.Group className="mb-3" controlId="formBasicDescription">
							<Form.Control onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Description" required />
						</Form.Group>
					)} */}

					<Form.Group className="mb-3" controlId="formBasicDescription">
						<Form.Control
							as="textarea"
							rows={3}
							onChange={(e) => setDescription(e.target.value)}
							type="text"
							placeholder="Description"
							required
							style={{ resize: "none" }}
						/>
					</Form.Group>

					{/* <Button onClick={(e) => handleSubmit(e)} variant="success" type="submit" style={{ backgroundColor: "#04396C", width: "100%", fontSize: "22px" }}> */}
					<Button onClick={(e) => handleSubmit(e)} variant="success" type="submit" style={{ width: "100%", fontSize: "22px" }}>
						Publish
					</Button>

					<Link className="d-grid gap-2 mt-3" style={{ textDecoration: "none" }} to="/AddInfo">
						<Button variant="danger" size="lg" style={{ fontSize: "22px" }}>
							Cancel
						</Button>
					</Link>
				</Form>
			</div>
		</>
	);
}

export default Create;
