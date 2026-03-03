const app = require("./app");

require("dotenv").config();

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

server.on("error", (err) => {
  console.error("Server failed to start:", err);
});

module.exports = server;




