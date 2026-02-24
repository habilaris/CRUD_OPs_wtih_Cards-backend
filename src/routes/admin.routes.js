const express = require("express");
const userModel = require("../models/user.model");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Hello Admin");
});

router.get("/cards", async (req, res) => {
  console.log("Got a request at api/admin/cards");
  const users = await userModel.find();
  console.log("Fetched users at /api/admin/cards");
  res.status(200).send(users);
});

router.post("/create-card", (req, res) => {
  try {
    const { name, age, gender } = req.body;

    userModel.create({ name, age, gender });
    res.status(201).send({ message: "User Created" });
    console.log("A new user is created.");
    console.log(`{Name: ${name}, Age: ${age}, Gender: ${gender}}`);
  } catch (err) {
    res.status(500).send({ message: "Could not create the user!" });
    console.log("Error creating the user:", err);
  }
});

module.exports = router;
