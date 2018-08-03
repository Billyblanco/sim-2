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

  render() {
    return (
      <div>
       
        DASHBOARD
        
        <Link to="/wizard"><button>Add New Property</button></Link>
        {
          this.state.houses.map( (houses, index) => {
            return (
              < House houses={houses}
              // key={houses.id} 
              />
            )
          })
        }
      </div>
    )
  }
}
export default Dashboard 