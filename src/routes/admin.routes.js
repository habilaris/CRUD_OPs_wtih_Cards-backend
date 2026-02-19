const express = require("express");
const userModel = require("../models/user.model");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Hello Admin");
});

router.get("/cards", (req, res) => {
  res.status(200).send("Here are your cards");
});

router.post("/create-card", (req, res) => {
  try {
    userModel.create({ name: "Habil" });
    res.status(201).send("User Created");
    console.log("A new user is created.");
  } catch (err) {
    res.status(500).send("Could not create the user!");
    console.log("Error creating the user:", err);
  }
});

module.exports = router;
