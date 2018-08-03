import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Route, Switch  } from 'react-router-dom'
import StepOne from './duck-components/StepOne';
import StepTwo from './duck-components/StepTwo';
import StepThree from './duck-components/StepThree'

class Wizard extends Component {
  render() {
    return (
      <div>
      
      <Link to="/"><button>Cancel</button></Link>
    <Switch>
      <Route exact path="/wizard/step1" component={StepOne}/>
      <Route path="/wizard/step2" component={StepTwo}/>
      <Route path="/wizard/step3" component={StepThree}/>
  </Switch>
      </div>
    )
  }
}

export default Wizard