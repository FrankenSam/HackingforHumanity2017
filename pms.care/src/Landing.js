import React, { Component } from 'react';
import logo from './assets/pms_landing_logo.png';
import step1 from './assets/step1.png';
import step2 from './assets/step2.png';
import step3 from './assets/step3.png';
import './App.css';
class Landing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='container mainDesc'>
          <img className='img-responsive' src={logo} />
          <h4>PMS Crate is a crate subscription service that combines <strong>self-care</strong> and <strong>philanthropy</strong></h4>
          <button className='btn getStarted' onClick={this.props.processStarted}>Sounds great, let's start!</button>
        </div>
        <div className='work row'>
          <div className='container'>
            <h3>How does it work?</h3>
            <div className='step col-md-4'>
              <img className='img-responsive' src={step1}/>
              <h4 className='stepHeader'>Step 1</h4>
              <p>Pick a women-focused charity or non-profit.</p>
              <p>You can choose from the month's featured charity or non-profit, or we can help you choose based on your interests.</p>
            </div>
            <div className='step col-md-4'>
              <img className='img-responsive' src={step2}/>
              <h4 className='stepHeader'>Step 2</h4>
              <p>Pick products for your crate from a curated list of self-car items for your mind, body, and soul.</p>
              <p>We help support small women-owned businesses and indie brands.</p>
            </div>
            <div className='step col-md-4'>
              <img className='img-responsive' src={step3}/>
              <h4 className='stepHeader'>Step 3</h4>
              <p>Wait patiently (and excitedly) for your crate to come in the mail!</p>
              <p>You can choose to buy one as a gift (treat yo self!) or monthly subscriptions to help prepare for your time of the month.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;