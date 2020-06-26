import React, { Component } from 'react';

import { Container } from 'semantic-ui-react';

import CoinTable from './components/CoinTable';
import Cards from './components/Cards';

import { fetchData } from './api';

class App extends Component {
  state = {
    data: []
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData })
  }

  render() {
    const { data } = this.state;
    // console.log(data)
    return (
      <Container>
        <Cards />
        <CoinTable data={data} />
      </Container>
    );
  }
}

export default App;