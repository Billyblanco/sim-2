import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class StepTwo extends Component {
  render () {
    return (
  <div>
    <p>Image Url:</p>
      <input />
      
      <Link to="/wizard/step1"><button>Previous Step</button></Link>
      <Link to="/wizard/step3"><button>Next Step</button></Link>
  </div>
    )
  }
}
export default StepTwo;