import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Activities from "./Components/Activities";
import ActReadMore from "./Components/ActReadMore";
// import Courses from "./Components/Courses";
// import CoursesInner from './Components/CoursesInner';
import Contact from "./Components/Contact";
import AdminLogin from "./Components/AdminLogin";
import AddInfo from "./Components/AddInfo";
import Create from "./Components/Create";
import Edit from "./Components/Edit";

const App = () => {
	// const isLoggedIn = window.localStorage.getItem("loggedIn");

	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/activities" element={<Activities />} />
					<Route path="/about" element={<About />} />
					<Route path="/activities/post" element={<ActReadMore />} />
					{/* <Route path="/courses" element={<Courses />} /> */}
					{/* <Route path='courses/inner' element={<CoursesInner />} /> */}
					<Route path="/contact" element={<Contact />} />
					{/* <Route path="/adminLogin" element={isLoggedIn !== "true" ? <AdminLogin /> : <AddInfo />} />
					<Route path="/addInfo" element={isLoggedIn === "true" ? <AddInfo /> : <AdminLogin />} />
					<Route path="/create" element={isLoggedIn === "true" ? <Create /> : <AdminLogin />} />
					<Route path="/edit" element={isLoggedIn === "true" ? <Edit /> : <AdminLogin />} /> */}
					<Route path="/adminLogin" element={<AdminLogin />} />
					<Route path="/addInfo" element={<AddInfo />} />
					<Route path="/create" element={<Create />} />
					<Route path="/edit" element={<Edit />} />
				</Routes>
			</Router>
			<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossOrigin="anonymous" />
		</>
	);
};

export default App;
