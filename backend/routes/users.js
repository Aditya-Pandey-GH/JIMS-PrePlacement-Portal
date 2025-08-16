const express = require("express");
const User = require("../models/User");

const app = express.Router();

app.get("/", async (req, res) => {
	let data = await User.find({});
	console.log(req.query);
	let chk = 0;
	for (let i = 0; i < data.length; i++) {
		if (req.query.email === data[i].email) {
			if (req.query.password === data[i].password) {
				chk = 1;
				res.send(data[i]);
			}
		}
	}
	if (chk === 0) {
		res.send("User not found");
	}
});

module.exports = app;
