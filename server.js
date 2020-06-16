require('dotenv').config();
const express = require("express"),
  app = express(),
  port = process.env.PORT || 5000,
  cors = require("cors"),
  axios = require("axios");

app.use(cors());

// remove favicon error
app.get('/favicon.ico', (req, res) => res.status(204));

app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});

app.use("/api/nomics/currencies/ticker", async (req, res) => {
  const key = `${process.env.NOMICS_API_KEY}`;
  const config = {
    params: {
      key: key
    }
  };
  const baseUrl = 'https://api.nomics.com/v1';

  try {
    const response = await axios.get(`${baseUrl}/currencies/ticker`, config)
    let data = await response.data
    const coins = data
    const coinsList = coins.slice([0], [10]).map((item, i) => {
      console.log(item);
      return item;
    });
    res.send(coinsList)
  } catch (error) {
    console.error("Your ERROR: ", error)
  }
})



app.listen(port, () => console.log(`Backend server is live on localhost:${port}`));