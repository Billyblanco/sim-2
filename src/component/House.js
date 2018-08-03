import React, { Component } from 'react'

class  House extends Component {
  render () {
    const { name, address, city, state, zip, img, mortgage, rent } = this.props.houses
  return (
    
    <div>
      <h1>Home Listings:</h1>
      <p>{name}</p>
      <p>{address}</p>
      <p>{city}</p>
      <p>{state}</p>
      <p>{zip}</p>
      <p>{img}</p>
      <p>{mortgage}</p>
      <p>{rent}</p>
      <div>
            <button onClick={ () => {this.props.delete(this.props.houses.id)}}>Delete</button>
        </div> 
    </div>
  )
}
}
export default House