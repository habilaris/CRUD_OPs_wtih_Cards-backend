// Server should only start the server.
const app = require("./src/app");
const env = require("./src/config/env");

const PORT = env.PORT;

app.listen(PORT, () => {
  console.log(`Server Listening for requests at port: ${PORT}`);
});
