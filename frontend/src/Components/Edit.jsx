import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";

function Edit() {
	let navigate = useNavigate();

	useEffect(() => {
		if (window.localStorage.getItem("loggedIn") !== "true") {
			navigate("/adminLogin", { replace: true });
		}
		document.title = "Admin Login @JIMS";
	});

	const id = localStorage.getItem("id");
	// const [id, setid] = useState(localStorage.getItem("id"));
	const [title, setTitle] = useState(localStorage.getItem("title"));
	const [link, setLink] = useState(localStorage.getItem("link"));
	const [category, setCategory] = useState(localStorage.getItem("category"));
	const [description, setDescription] = useState(localStorage.getItem("description"));

	const handelSubmit = async (e) => {
		e.preventDefault();

		if (title.trim() === "" || link.trim() === "" || category.trim() === "") {
			alert("Invalid input. Please fill in all fields.");
			return;
		}

		// const formDataUpdate = {
		// 	ID: encodeURIComponent(id),
		// 	title: encodeURIComponent(title),
		// 	link: encodeURIComponent(link),
		// 	category: encodeURIComponent(category),
		// 	description: encodeURIComponent(description),
		// };

		const formDataUpdate = {
			ID: id,
			title: title,
			link: link,
			category: category,
			description: description,
		};

		try {
			await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/api/acts/`, formDataUpdate);
		} catch (err) {
			console.log(err);
		}

		localStorage.setItem("id", null);
		localStorage.setItem("title", null);
		localStorage.setItem("link", null);
		localStorage.setItem("category", null);
		localStorage.setItem("description", null);

		// if (description.trim() !== "") {
		// 	await axios.patch(`http://localhost:5000/update/${id}-${encodeURIComponent(title)}-${encodeURIComponent(link)}-${encodeURIComponent(category)}-${encodeURIComponent(description)}`);
		// } else {
		// 	await axios.patch(`http://localhost:5000/update/${id}-${encodeURIComponent(title)}-${encodeURIComponent(link)}-${encodeURIComponent(category)}-undefined`);
		// }

		navigate("/AddInfo");
	};

	// useEffect(() => {
	// 	// setTitle(localStorage.getItem("title"));
	// 	// setLink(localStorage.getItem("link"));
	// 	// setCategory(localStorage.getItem("category"));
	// 	// setDescription(localStorage.getItem("description"));
	// 	// setid(localStorage.getItem("id"));
	// }, []);

	const options = [
		{ value: "Image", label: "Image" },
		{ value: "Video", label: "Video" },
		{ value: "Document", label: "Document" },
	];

	return (
		<>
			<NavBar />

			<div className="d-flex align-items-center justify-content-center vh-100">
				<div className="w-50 p-4" style={{ border: "3px solid #04396C", borderRadius: "12px" }}>
					<h2 className="mb-4 text-center">Update</h2>

					<Form>
						<Form.Group className="mb-3" controlId="formBasicTitle">
							<Form.Control value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter Name" />
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicLink">
							<Form.Control value={link} onChange={(e) => setLink(e.target.value)} type="url" placeholder="Link" />
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicCategory">
							{/* <Form.Select onChange={(e) => setCategory(e.target.value)} placeholder={"Category"} required > */}
							<Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
								{options.map((option) => (
									// <option key={option.label} value={option.value} hidden={option.hidden}>
									<option key={option.label} value={option.value}>
										{option.label}
									</option>
								))}
							</Form.Select>
						</Form.Group>

						{/* {(category === "Image" || category === "Document") && (
							<Form.Group className="mb-3" controlId="formBasicDescription">
								<Form.Control onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Description" required />
							</Form.Group>
						)} */}

						<Form.Group className="mb-3" controlId="formBasicDescription">
							{/* <Form.Control value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Description" required /> */}
							<Form.Control
								value={description}
								as="textarea"
								rows={3}
								onChange={(e) => setDescription(e.target.value)}
								type="text"
								placeholder="Description"
								required
								style={{ resize: "none" }}
							/>
						</Form.Group>

						{/* <Button onClick={(e) => handelSubmit(e)} variant="success" type="submit" size="lg" style={{ backgroundColor: "#04396C", width: "100%" }}> */}
						<Button onClick={(e) => handelSubmit(e)} variant="success" type="submit" size="lg" style={{ width: "100%" }}>
							Publish
						</Button>

						<Link className="d-grid gap-2 mt-3" style={{ textDecoration: "none" }} to="/AddInfo">
							<Button variant="danger" size="lg">
								Cancel
							</Button>
						</Link>
					</Form>
				</div>
			</div>
		</>
	);
}

export default Edit;
