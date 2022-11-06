const mongoose = require('mongoose');

function connect(url) {
	mongoose.connect(url)
	const  db = mongoose.connection;

	db.on("connected", () => {
	console.log("Connected to MongoDB Successfully");
	});
	db.on("error", (err) => {
	console.log("An error occurred while connecting to MongoDB");
	console.log(err);
});
}

module.exports = { connect }