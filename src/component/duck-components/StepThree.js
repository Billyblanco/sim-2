 import React, { Component } from 'react'
 import { Link } from 'react-router-dom'
import axios from 'axios'

 class StepThree extends Component {

  addHouse = () => {
    const { name, address, city, state, zip } = this.state
    const newHouse = { name, address, city, state, zip }
    axios.post('/api/houses', newHouse).then(results => {
      this.updateHouses(results.data)
    })
  }

  updateHouses = ( houses ) => {
    this.setState( {houses} )
  }

   render () {
     return (
   <div>
     <button>Cancel</button>

     <h1>Add New Listing</h1>
     <h4>Recommemnded Rend: $0</h4>

    <p>Monthly Mortgage Amount:</p>
       <input  />
    <p>Desired Monthly Rent:</p>
       <input />

       <Link to="/wizard/step2"><button>Previous Step</button></Link>
       <Link to="/"><button onClick={ () => {this.props.addHouse()}}>Complete</button></Link>

   </div>
     )
   }
 }
 export default StepThree;