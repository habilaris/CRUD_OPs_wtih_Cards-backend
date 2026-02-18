// Server should only start the server.
const app = require("./src/app");
const dotenv = require("dotenv");

dotenv.config({ quiet: true });
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server Listening for requests at port: ${PORT}`);
});
