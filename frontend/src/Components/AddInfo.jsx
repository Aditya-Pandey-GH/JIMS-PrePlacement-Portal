import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import "./css/AddInfo.css";
import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";

const AddInfo = () => {
	window.localStorage.setItem("curPage", "addInfoPage");

	let navigate = useNavigate();

	useEffect(() => {
		if (window.localStorage.getItem("loggedIn") !== "true") {
			navigate("/adminLogin", { replace: true });
		}
		document.title = "Admin Login @JIMS";
	});

	const [acts, setActs] = useState([]);

	const onLoaded = async () => {
		const info = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/acts/`, {
			params: {
				category: "all",
			},
		});
		setActs(info.data);
	};

	useEffect(() => {
		onLoaded();
	}, []);

	const setID = (id, title, link, category, description) => {
		localStorage.setItem("id", id);
		localStorage.setItem("title", title);
		localStorage.setItem("link", link);
		localStorage.setItem("category", category);
		localStorage.setItem("description", description);
	};

	const deleted = async (id) => {
		try {
			await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/acts/`, {
				params: {
					ID: id,
				},
			});
			onLoaded(); // Refresh reminders after deletion
		} catch (error) {
			console.error("Error deleting reminder:", error);
		}
		navigate("/AddInfo");
	};

	return (
		<>
			<NavBar />
			<div style={{ height: "10rem" }} />

			<div className="showInfoTable">
				<h1 className="addInfoHead">
					{/* <span>ACTIVITIES</span> */}
					<div style={{ width: "fit-content" }}>
						ACTIVITIES
						<Link className="d-grid gap-2" to="/create">
							<Button style={{ backgroundColor: "transparent", border: "none" }}>
								{/* Create */}
								<img
									src="https://cdn-icons-png.freepik.com/512/4315/4315609.png"
									alt="Add New Item"
									style={{ width: "2rem", margin: "0", padding: "0" }}
								/>
							</Button>
						</Link>
					</div>
				</h1>

				<Table bordered style={{ borderColor: "#04396C" }}>
					<thead>
						<tr className="tabTitHead">
							<th style={{ width: "10%" }}>Sr. No.</th>
							<th>Title</th>
							{/* <th>LINK</th> */}
							<th colSpan={2} style={{ width: "10%" }}>
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						{acts.map((item, srNo) => {
							return (
								<tr key={item.id}>
									<td style={{ textAlign: "center" }}>{srNo + 1}</td>
									{/* <td>{item.title}</td> */}
									<td>
										<Link
											to={(item.link.includes("http") ? "" : "http://") + item.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											{item.title}
										</Link>
									</td>
									{/* <td>{item.link}</td> */}
									{/* <td>{item.category}</td> */}
									{/* <td>{item.description}</td> */}
									<td style={{ textAlign: "center" }}>
										<Link to={`/edit`}>
											<button
												onClick={(e) => setID(item._id, item.title, item.link, item.category, item.description)}
												variant="warning"
												style={{ backgroundColor: "transparent", borderWidth: "0" }}
											>
												{/* Update */}
												<img
													src="https://cdn-icons-png.freepik.com/512/2842/2842191.png"
													alt="Edit"
													style={{ width: "2rem" }}
												/>
											</button>
										</Link>
									</td>
									<td style={{ textAlign: "center" }}>
										<button
											onClick={(e) => deleted(item._id)}
											variant="danger"
											style={{ backgroundColor: "transparent", borderWidth: "0" }}
										>
											{/* Delete */}
											<img
												src="https://cdn-icons-png.freepik.com/512/12319/12319395.png"
												alt="Delete"
												style={{ width: "2rem" }}
											/>
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
				{/* <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
					<Link className="d-grid gap-2" style={{ textDecoration: "none" }} to="/create">
						<Button variant="warning" size="lg" style={{ backgroundColor: "#04396C", color: "whitesmoke", fontSize: "22px", width: "400px" }}>
							Create
						</Button>
					</Link>
					<div style={{ margin: "1px" }}></div>
					<Link className="d-grid gap-2" style={{ textDecoration: "none" }} to="/">
						<Button variant="info" size="lg" style={{ backgroundColor: "#04396C", color: "whitesmoke", fontSize: "22px", width: "400px" }} onClick={logOut}>
							Log Out
						</Button>
					</Link>
				</div> */}
			</div>
		</>
	);
};

export default AddInfo;
