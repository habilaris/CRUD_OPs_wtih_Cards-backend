const dotenv = require("dotenv");
dotenv.config({ quiet: true });

const env = {
  PORT: process.env.PORT || 3001,
};

module.exports = env;
