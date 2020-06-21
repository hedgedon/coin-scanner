import React, { Component } from 'react';

import CoinTable from './components/CoinTable'
import { Container } from 'semantic-ui-react'

import { fetchData } from './api';

class App extends Component {
  state = {
    data: []
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    // console.log(fetchedData)
    this.setState({ data: fetchedData })
  }

  render() {
    const { data } = this.state;
    // console.log(data)
    return (
      <Container>
        <CoinTable data={data} />
      </Container>
    );
  }
}

export default App;