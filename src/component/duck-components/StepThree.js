 import React, { Component } from 'react'
 import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import { handleMortgage, handleRent } from '../../ducks/reducer'


 class StepThree extends Component {

  addHouse = () => {
    const { name, address, city, state, zip } = this.props
    console.log('PROPPPPS', this.props)
    const newHouse = { name, address, city, state, zip }
    axios.post('/api/houses', newHouse).then(results => {
      this.updateHouses(results.data)
    })
  }

  updateHouses = ( houses ) => {
    this.setState( {houses} )
  }

   render () {
     let { handleMortgage, handleRent } = this.props 
     return (
   <div>
  

     <h1>Add New Listing</h1>
     <h4>Recommemnded Rend: $0</h4>

    <p>Monthly Mortgage Amount:</p>
       <input 
       type="number" 
       onChange={ (e) => handleMortgage(e.target.value)}/>


    <p>Desired Monthly Rent:</p>
       <input 
       type="number"
       onChange={ (e) => handleRent(e.target.value)} />

       <Link to="/wizard/step2"><button>Previous Step</button></Link>
       <Link to="/"><button onClick={ () => {this.addHouse()}}>Complete</button></Link>

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
    img: state.img,
    mortgage: state.mortgage,
    rent: state.rent
  }
}

 export default connect(mapStateToProps, { handleMortgage, handleRent})(StepThree);