import React, { Component } from 'react';
import './App.css';
import menuIcon from './assets/menu.png';

class Nav extends Component {
  render() {
    return (
      <div className='navBar'>
        <h1>PMS Crate</h1>
        <div className='mobile-menu'>
          <img src={menuIcon} />
        </div>
        <ul className='menu'>
          <a href="#"><li>About</li></a>
          <a href="#"><li>Organization Spotlight</li></a>
          <a href="#"><li>Log In</li></a>
        </ul>
      </div>
    );
  }
}

export default Nav;
