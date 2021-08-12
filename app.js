const express = require("express");
const morgan = require("morgan");
const path = require("path");
const fs = require('fs')
const layout = require('./views/layout')
const { db } = require('./models')

const app = express();

app.use(morgan("dev"));
//Extended False = cannot post nested object
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, "public")));


db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })
//Default Route
app.get("/", (req, res) => {
  res.send(layout(''));
})

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`App listening in ${PORT}`)
})

