import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateName, updateAddress, updateCity, updateState, updateZip } from '../../ducks/reducer'

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
  let { updateName, updateAddress, updateCity, updateState, updateZip } = this.props
  
  return (
    <div>
     <h1>Add New Listing</h1>

      <p>Property Name:</p>
      <input type="text" placeholder="Property Name" 
      onChange={ (e) => updateName(e.target.value)} />

      <p>Address:</p>
      <input type="text" placeholder="Address" 
      onChange={ (e) => updateAddress(e.target.value)} />

      <p>City:</p>
      <input type="text" placeholder="City" 
      onChange={ (e) => updateCity(e.target.value)}/>

      <p>State:</p>
      <input type="text" placeholder="State" 
      onChange={ (e) => updateState(e.target.value)}/>

      <p>Zip:</p>
      <input type="number" placeholder="Zip" 
      onChange={ (e) => updateZip(e.target.value)}/>
        
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
export default connect(mapStateToProps, {updateName, updateAddress, updateCity, updateState, updateZip})(StepOne)