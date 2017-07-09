import React, { Component } from 'react';
import './App.css';
import landingLogo from './img/pms_landing_logo.png';

class Nav extends Component {
  render() {
    return (
      <div className='navBar'>
        <img src={landingLogo} />
      </div>
    );
  }
}

export default Nav;
