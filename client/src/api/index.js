import axios from 'axios';

const url = 'http://localhost:5000/coingecko/coins/markets';

export const fetchData = async () => {
  try {
    const { data } = await axios.get(url);
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