const CoinGecko = require('coingecko-api');

const CoinGeckoClient = new CoinGecko();

var func = async() => {
  let data = await CoinGeckoClient.ping();
};