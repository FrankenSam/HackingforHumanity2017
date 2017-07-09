import React, { Component } from 'react';
import logo from './assets/pms_landing_logo.png';
import step1 from './assets/step1.png';
import step2 from './assets/step2.png';
import step3 from './assets/step3.png';
class Landing extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <img src={logo} />
        <p>PMS Crate is a crate subscription service that combines <strong>self-care</strong> and <strong>philanthropy</strong></p>
        <button>Sounds great, let's start!</button>
        <div className='work'>
          <h3>How does it work?</h3>
          <div className='step'>
            <img src={step1}/>
            <h4>Step 1</h4>
            <p>Pick a women-focused charity or non-profit.</p>
            <p>You can choose from the month's featured charity or non-profit, or we can help you choose based on your interests.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;