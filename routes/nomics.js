const express = require('express')
axios = require("axios");
const router = express.Router()

router.get("/currencies/ticker", async (req, res) => {
  const baseUrl = 'https://api.nomics.com/v1';
  const key = `${process.env.NOMICS_API_KEY}`;
  const config = {
    params: {
      key: key
    }
  };

  try {
    const response = await axios.get(`${baseUrl}/currencies/ticker`, config)
    let data = await response.data
    const coins = data
    const coinsList = coins.slice([0], [10]).map((item) => {
      // console.log(items);
      return item;
    });
    res.send(coinsList)
  } catch (error) {
    console.error("Your ERROR: ", error)
  }
})

module.exports = router