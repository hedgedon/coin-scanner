import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    data: []
  }

  async componentDidMount() {
    const { data } = await axios.get("http://localhost:5000/")
    console.log(data)
    this.setState({ data: data })
  }
  
  render() {
    return (
      <div>
        App
      </div>
    );
  }
}

export default App;