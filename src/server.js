const app = require("./app");

require("dotenv").config();

const port = process.env.PORT || 3000;

async function startServer() {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is up on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to start:", error);
    process.exit(1);
  }
}

const initializeServer = startServer();

module.exports = initializeServer;