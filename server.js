const express = require("express");
const dotenv = require("dotenv");

const app = express();

dotenv.config({ quiet: true });

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server Listening for requests at port: ${PORT}`);
});
