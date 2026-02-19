const mongoose = require("mongoose");
const env = require("./env");

async function connectToDB() {
  try {
    const connection = await mongoose.connect(env.MONGODB_URI);
    console.log("Successfully connected to DB");
  } catch (err) {
    console.log("Could not connect to DB", err);
    process.exit(1);
  }
}

module.exports = connectToDB;
