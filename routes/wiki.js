const express = require("express");
const router = express.Router();
const addPage = require("../views/addPage");

const app = express();


router.get("/", async (req, res) => {
  try {
    res.send(addPage());
  } catch (error) {
    console.log(error)
  }
})

router.post("/", async (req, res) => {
  try {
    res.send("/WikiPOST This works!")
  } catch (error) {
    console.log(error)
  }
})

router.get("/add", async (req, res) => {
  try {
    res.send("/Add This works!")
  } catch (error) {
    console.log(error)
  }
});


module.exports = router;
