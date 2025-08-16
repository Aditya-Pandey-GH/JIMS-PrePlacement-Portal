const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const actSchema = new Schema({
	id: {
		type: String,
		unique: true,
		required: true,
	},
	title: {
		type: String,
		unique: false,
		required: true,
	},
	link: {
		type: String,
		unique: false,
		required: true,
	},
	category: {
		type: String,
		unique: false,
		required: true,
	},
	description: {
		type: String,
		unique: false,
		required: true,
		default: "undefined",
	},
	dnt: {
		type: String,
		unique: false,
		required: true,
	},
});

module.exports = Act = mongoose.model("act", actSchema);
