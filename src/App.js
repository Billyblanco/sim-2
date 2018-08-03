import React, { Component } from 'react';
import './App.css';
import Header from './component/Header'
import axios from 'axios'
import routes from './routes'

class App extends Component {
  state = {
    response: ''
  }

  // componentDidMount() {
  //   axios.get('/api/products').then( res => {
  //     this.setState({
  //       response: res.data
  //     })
  //   })
  // }

  render() {
    return (
      <div>
      <Header />
      { routes }
      </div>
    );
  }
}

export default App;
