const dotenv = require("dotenv");
const adminRouter = require("./routes/adminRoutes");
const express = require("express");

const app = express();

app.use("/admin", adminRouter);

app.use((req, res) => {
  res.send(`There is no route at:  ${req.originalUrl} `);
});

module.exports = app;
