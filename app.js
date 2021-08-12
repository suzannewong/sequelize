const express = require("express");
const morgan = require("morgan");
const path = require("path");
const fs = require("fs");
const layout = require("./views/layout");
const { db, Page, User } = require("./models/models");
const wiki = require("./routes/wiki");
const users = require("./routes/users");

const app = express();

app.use(morgan("dev"));
//Extended False = cannot post nested object
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/wiki", wiki);
app.use("/users", users);

db.authenticate().then(() => {
	console.log("connected to the database");
});

//Default Route
app.get("/", (req, res) => {
	res.redirect("/wiki");
});

//The .sync methods being called off of Page and User can be placed pretty much anywhere, but we suggest an appropriate place might be before your server is calling its .listen method with a port.
const init = async () => {
	const PORT = 1337;
	/*  //this would synchronize the individual models instead of the entire database
	await Page.sync();
	await User.sync(); */

	//if true, will drop all the tables
	await db.sync({ force: true });
	// make sure that you have a PORT constant
	app.listen(PORT, () => {
		console.log(`Server is listening on port ${PORT}!`);
	});
};

init();
