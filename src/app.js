const dotenv = require("dotenv");
const adminRouter = require("./routes/admin.routes");
const express = require("express");


const app = express();

app.get("/", (req, res) => {
  res
    .status(200)
    .send('This is an api for "CRUD Operation with Cards"  pseudo project!');
});

app.use("/api/admin", adminRouter);

app.use((req, res) => {
  res.send(`There is no route at:  ${req.originalUrl} `);
});

module.exports = app;
