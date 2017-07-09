import React, { Component } from 'react';
import './App.css';

class Footer extends Component {

  render() {
    return (
      <div>
        {this.props.cart.length ?
        <h1>{this.props.cart.length} Items</h1>:""
        }
        
        <button className='btn'>Submit</button>
      </div>
    );
  }
}

export default Footer;