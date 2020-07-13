const express = require("express");
axios = require("axios");
const router = express.Router();

const baseUrl = "https://api.coingecko.com/api/v3/";

// gets all coin data
router.get("/coins/markets", async (req, res) => {
  const endpoint =
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  try {
    const response = await axios.get(`${baseUrl}${endpoint}`);
    const data = await response.data;

    const coins = data;

    // refactor to return only what data we will be using
    const coinsList = coins.map((item) => {
      return item;
    });

    res.send(coinsList);
  } catch (error) {
    console.error("Your ERROR: ", error);
  }
});

// gets all derivatives exchange data
router.get("/derivatives/exchanges", async (req, res) => {
  const endpoint = "derivatives/exchanges";

  try {
    const response = await axios.get(`${baseUrl}${endpoint}`);
    const exchanges = response.data;

    // from the API, return only id and name
    const filteredExchanges = exchanges
      .slice([0], [7])
      .map(({ name, id, trade_volume_24h_btc, open_interest_btc, url }) => {
        // take the open_interest_btc, and multiply it by the current price
        const btc_price = 9327.23;
        const formatter = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2,
        });
        let open_interest_dollar = open_interest_btc * btc_price;
        open_interest_dollar = open_interest_btc * btc_price;
        let formatted = formatter.format(open_interest_dollar);

        console.log(formatted);
        return {
          name,
          id,
          trade_volume_24h_btc,
          open_interest_btc,
          open_interest_dollar,
          url,
        };
      });

    res.send(filteredExchanges);
  } catch (error) {
    console.error("Your ERROR: ", error);
  }
});

module.exports = router;
