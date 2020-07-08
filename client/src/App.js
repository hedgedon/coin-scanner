import React, { Component } from "react";

import "./App.module.css";

import { Container } from "semantic-ui-react";
import CoinTable from "./components/CoinTable";

import { fetchMarketData, fetchExchangeData } from "./api";

class App extends Component {
  state = {
    marketData: [],
    exchangeData: [],
  };

  async componentDidMount() {
    const fetchedMarketData = await fetchMarketData();
    const fetchedExchangeData = await fetchExchangeData();
    this.setState({
      marketData: fetchedMarketData,
      exchangeData: fetchedExchangeData,
    });
    // console.log(this.state.exchangeData)
  }

  render() {
    const { marketData, exchangeData } = this.state;

    return (
      <Container className="style">
        <CoinTable marketData={marketData} exchangeData={exchangeData} />
      </Container>
    );
  }
}

export default App;
