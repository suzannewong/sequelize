const express = require("express");
const router = express.Router();
const { Page } = require("../models/models");
const addPage = require("../views/addPage");

const app = express();

router.get("/", async (req, res, next) => {
	res.send("needs GET source code");
	next();
});

router.post("/", async (req, res, next) => {
	try {
		const page = await Page.create({
			title: req.body.title,
			slug: "0",
			content: req.body.content,
			//we need to include these bc previously we defined this as notNULL
			status: "open",
		});
		//console.log(page);
		// make sure we only redirect *after* our save is complete! Don't forget to `await` the previous step. `create` returns a Promise.
		res.redirect("/");
	} catch (error) {
		next(error);
	}
});

//"Add a Page"
router.get("/add", async (req, res) => {
	try {
		res.send(addPage());
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
