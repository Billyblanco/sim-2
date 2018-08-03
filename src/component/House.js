import React, { Component } from 'react'

class  House extends Component {
  render () {
    const { name, address, city, state, zipCode } = this.props.houses
  return (
    
    <div>
      <h1>HOUSES:</h1>
      <p>{name}</p>
      <p>{address}</p>
      <p>{city}</p>
      <p>{state}</p>
      <p>{zipCode}</p>
      <button>Delete Button</button>
    </div>
  )
}
}
export default House