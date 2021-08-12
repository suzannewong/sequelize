const Sequelize = require("sequelize");
//turns off the logs are shown down at the terminal
const db = new Sequelize("postgres://localhost:5432/wikistack", {
	logging: false,
});

const Page = db.define("page", {
	title: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	slug: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	content: {
		type: Sequelize.TEXT,
		allowNull: false,
	},
	status: {
		type: Sequelize.ENUM("open", "closed"),
		allowNull: false,
	},
});

const User = db.define("user", {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		//pick from this per-attribute validator
		validate: {
			isEmail: true,
		},
	},
});

module.exports = { db, Page, User };
