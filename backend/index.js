const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(
	cors({
		origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
		optionsSuccessStatus: 200,
	})
);

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		console.log("Pre-Placement DataBase Connected");
	})
	.catch((err) => {
		console.error(err);
	});

const users = require("./routes/users");
app.use("/api/users", users);

const acts = require("./routes/acts");
app.use("/api/acts", acts);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
