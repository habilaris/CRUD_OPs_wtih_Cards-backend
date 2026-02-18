const express = require("express");
const dotenv = require("dotenv");
const adminRouter = require("./src/routes/adminRoutes");

const app = express();

dotenv.config({ quiet: true });

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/admin", adminRouter);

app.use((req, res) => {
  res.send(`There is no route at:  ${req.originalUrl} `);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server Listening for requests at port: ${PORT}`);
});
