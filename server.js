const express = require("express");
const path = require("path");
require("dotenv").config();

const MONGO_STRING = process.env.MONGODB_URI;

mongoose
  .connect(MONGO_STRING, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Error...", err);
    process.exit();
  });

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.static(path.join(__dirname, "client", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
