import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleImg } from '../../ducks/reducer'

class StepTwo extends Component {
  render () {
    let { handleImg } = this.props 
    return (
  <div>
    <p>Image Url:</p>
      <input 
      onChange={ (e) => handleImg(e.target.value)} />
      
      <Link to="/wizard/step1"><button>Previous Step</button></Link>
      <Link to="/wizard/step3"><button>Next Step</button></Link>
  </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    img: state.img
  }
}

export default connect(mapStateToProps, { handleImg } )(StepTwo)