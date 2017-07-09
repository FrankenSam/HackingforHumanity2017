import React, { Component } from 'react';
import ProductList from './ProductList';
import './App.css';

class Package extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'><h1>Mind</h1><ProductList items={this.props.mindItems} catagory='mindItems' cart={this.props.cart} addToCart={this.props.addToCart}/></div>
            <div className='col-md-4'><h1>Body</h1><ProductList items={this.props.bodyItems} catagory='bodyItems' cart={this.props.cart} addToCart={this.props.addToCart}/></div>
            <div className='col-md-4'><h1>Soul</h1><ProductList items={this.props.soulItems} catagory='soulItems' cart={this.props.cart} addToCart={this.props.addToCart}/></div>
          </div>
        </div>
        
        
      </div>
    );
  }
}

export default Package;
