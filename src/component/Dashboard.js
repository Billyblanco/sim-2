import React, { Component } from 'react'
import House from './House'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Dashboard extends Component {
  constructor () {
    super()

    this.state = {
      houses: []
  }
}

  componentDidMount() {
    axios.get('/api/houses').then(res => {
      this.setState({
        houses: res.data
      })
    })
  }
  deleteHouse = (id) => {
    axios.delete(`/api/houses/${id}`).then(results => {
      this.setState({
        houses: results.data
      })
    })
  }

  // addHouse = () => {
  //   const { name, address, city, state, zip } = this.state
  //   const newHouse = { name, address, city, state, zip }
  //   axios.post('/api/houses', newHouse).then(results => {
  //     this.updateHouses(results.data)
  //   })
  // }

  // updateHouses = ( houses ) => {
  //   this.setState( {houses} )
  // }

  render() {
    return (
      <div>
       
        DASHBOARD
        
        <Link to="/wizard/step1"><button>Add New Property</button></Link>
        {
          this.state.houses.map( (houses, index) => {
            return (
              < House houses={houses}
              key={houses.id} 
              delete={this.deleteHouse}
              />
            )
          })
        }
          {/* <Link to="/"><button onClick={ () => {this.addHouse()}}>Complete</button></Link> */}
      </div>
    )
  }
}
export default Dashboard 