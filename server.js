require('dotenv').config();
const express = require("express"),
  app = express(),
  port = process.env.PORT || 5000,
  cors = require("cors");

app.use(cors());
app.use(express.json());

// remove favicon error
app.get('/favicon.ico', (req, res) => res.status(204));

const coingeckoRouter = require('./routes/coingecko');
app.use('/coingecko', coingeckoRouter)

app.listen(port, () => console.log(`Backend server is live on localhost:${port}`));