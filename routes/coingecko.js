const express = require('express');
axios = require("axios");
const router = express.Router();

router.get("/coins/markets", async (req, res) => {
  const baseUrl = 'https://api.coingecko.com/api/v3/';
  const query = 'coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
  
  try {
    const response = await axios.get(`${baseUrl}${query}`)
    const data = await response.data

    const coins = data;
    const coinsList = coins.map((item) => {
      return item
    });
    res.send(coinsList);
  } catch (error) {
    console.error("Your ERROR: ", error)
  }
})

module.exports = router;