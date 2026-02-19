const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    gender: String,
  },
  {
    timestamps: true,
  },
);

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
