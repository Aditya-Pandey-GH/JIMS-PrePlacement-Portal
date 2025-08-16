const express = require("express");
const app = express.Router();

const Act = require("../models/Act");

// app.get("/", (req, res) => {
// 	Act.find()
// 		.then((act) => {
// 			res.send(act[0]);
// 		})
// 		.catch((err) => {
// 			res.status(404).json({ nomenuitemsfound: "No ativities found" });
// 		});
// });

app.get("/", async (req, res) => {
	let data = "";
	if (req.query.category === "all") {
		data = await Act.find({});
	} else {
		data = await Act.find({ category: req.query.category });
	}
	res.send(data);
});

app.post("/", async (req, res) => {
	const data = await Act.create(req.body);
	res.send(data);
});

app.patch("/", async (req, res) => {
	const data = await Act.updateOne(
		{ _id: req.body.ID },
		{
			// $set: {
			// 	title: decodeURIComponent(req.body.title),
			// 	link: decodeURIComponent(req.body.link),
			// 	category: decodeURIComponent(req.body.category),
			// 	description: decodeURIComponent(req.body.description),
			// },

			$set: {
				title: req.body.title,
				link: req.body.link,
				category: req.body.category,
				description: req.body.description,
			},
		}
	);
	res.send(data);
});

app.delete("/", async (req, res) => {
	const data = await Act.deleteOne({ _id: req.query.ID });
	res.send(data);
});

module.exports = app;
