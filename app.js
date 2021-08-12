const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();
app.use(morgan("dev"));
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname), "public"));
//Extended False = cannot post nested object


//Default Route
app.get("/", (req, res) => {
  res.send("Hello World")
})

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`App listening in ${PORT}`)
})

