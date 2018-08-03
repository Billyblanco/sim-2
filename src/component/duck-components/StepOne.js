import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Dashboard from '../Dashboard'
import Wizard from '../Wizard'
import { connect } from 'react-redux'


class StepOne extends Component {
constructor (){
  super()
  this.state = {
    name: '',
    address: '',
    city: '', 
    state: '',
    zip: 0

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
handleZip = (e) => {
  this.setState({
    zip: e.target.value
  })
}

render() {
  console.log(this.props)
  return (
    <div>
     
      <p>Property Name:</p>
      <input value={this.state.name} onChange={this.handleName} />
      <p>Address:</p>
      <input value={this.state.address} onChange={this.handleAddress} />
      <p>City:</p>
      <input value={this.state.city} onChange={this.handleCity}/>
      <p>State:</p>
      <input value={this.state.state} onChange={this.handleState}/>
      <p>Zip:</p>
      <input value={this.state.zip} onChange={this.handleZip}/>
        
      <Link to="/wizard/step2"><button>Next Step</button></Link>

    </div>
      
    )
  }
}

let mapStateToProps = state => {
  return {
    name: state.name,
    address: state.address, 
    city: state.city, 
    state: state.state, 
    zip: state.zip
  }
}
export default connect(mapStateToProps)(StepOne)