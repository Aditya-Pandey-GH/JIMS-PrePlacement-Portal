const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	pfp: {
		type: String,
		required: false,
		default: "https://i.postimg.cc/MZs1RkDD/jims.png",
	},
});

module.exports = User = mongoose.model("user", userSchema);
