require('dotenv').config();
const express = require("express"),
  app = express(),
  port = process.env.PORT || 5000,
  cors = require("cors"),
  axios = require("axios");

app.use(cors());
app.listen(port, () => console.log(`Backend server is live on localhost:${port}`));

// remove favicon error
app.get('/favicon.ico', (req, res) => res.status(204));

app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});
