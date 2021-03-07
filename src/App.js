import React, { Component } from 'react'
import axios from 'axios';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      exchanges: null
    }
  }
  componentDidMount(){
    this.getExchanges();
    console.log(this.state.exchanges);
  }
  async getExchanges(){
    const res = await axios.get('http://localhost:3000/exchanges')
    const data = await res.data

    this.setState({
      exchanges: data
    })
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
