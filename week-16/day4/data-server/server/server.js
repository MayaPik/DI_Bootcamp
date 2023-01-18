const express = require("express");
const cors = require("cors");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.text());
app.use(cors());

app.get("/api/hello", (req, res) => {
  res.send("Hello from the API!");
});

app.post("/api/submit", (req, res) => {
  res.set("Content-Type", "text/plain");
  res.send(`I receive your post request you send me: ${req.body}`);
  console.log(` input send: ${req.body}`);
});

app.listen(3003, () => {
  console.log("Server running on http://localhost:3003");
});
