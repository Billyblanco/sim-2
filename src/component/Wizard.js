import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Wizard extends Component {
  constructor (){
    super()
    this.state = {
      name: '',
      address: '',
      city: '', 
      state: '',
      zipCode: 0

    }

  }

  handleName = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  handleAddress = (e) => {
    this.setState({
      address: e.target.value
    })
  }
  handleCity = (e) => {
    this.setState({
      city: e.target.value
    })
  }
  handleState = (e) => {
    this.setState({
      state: e.target.value
    })
  }
  handleZipCode = (e) => {
    this.setState({
      zipCode: e.target.value
    })
  }

  render() {
    return (
      <div>
        WIZARD
        <Link to="/"><button>Cancel</button></Link>
        <p>Property Name:</p>
        <input value={this.state.name} onChange={this.handleName} />
        <p>Address:</p>
        <input value={this.state.address} onChange={this.handleAddress} />
        <p>City:</p>
        <input value={this.state.city} onChange={this.handleCity}/>
        <p>State:</p>
        <input value={this.state.state} onChange={this.handleState}/>
        <p>Zip:</p>
        <input value={this.state.zipCode} onChange={this.handleZipCode}/>

      </div>
    )
  }
}
export default Wizard