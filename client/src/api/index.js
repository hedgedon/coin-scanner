import axios from 'axios';

const url = 'http://localhost:5000/coingecko';

export const fetchMarketData = async () => {
  try {
    const { data } = await axios.get(`${url}/coins/markets`);
    // this returns another array of our objects. 
    // return { data }
    
    // Instant return of an object instead.
    const modifiedData = data.map((coins) => {
      // console.log(coins) //  ===> 0: {id: "BTC", currency: "BTC", symbol: "BTC", name: "Bitcoin", … }
      return coins;
    })

    return modifiedData;
  } catch (error) {
    console.error("Your ERROR", error)
  }
}

export const fetchExchangeData = async () => {
  try {
    const { data } = await axios.get(`${url}/derivatives/exchanges`);

    // Instant return of an object instead.
    const modifiedData = data.map((exchanges) => {
      // console.log(exchanges) //  ===> 0: { "name": "BitMEX", "id": "bitmex", "trade_volume_24h_btc": "198909.27", "open_interest_btc": 111044.77, "url": "https://www.bitmex.com/" }
      return exchanges;
    })

    return modifiedData;
  } catch (error) {
    console.error("Your ERROR", error)
  }
}