const express = require("express");
const rateLimiter = require("./rateLimiter");
require("dotenv").config();

const app = express();
const PORT = 3000;

app.use(rateLimiter);

app.get("/", (req, res) => {
  res.send("Welcome! You're within the rate limit.");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
