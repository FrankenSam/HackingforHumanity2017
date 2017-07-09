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
        <ProductList items={this.props.mindItems} catagory='mindItems' cart={this.props.cart} addToCart={this.props.addToCart}/>
        <ProductList items={this.props.bodyItems} catagory='bodyItems' cart={this.props.cart} addToCart={this.props.addToCart}/>
        <ProductList items={this.props.soulItems} catagory='soulItems' cart={this.props.cart} addToCart={this.props.addToCart}/>
        <h4>{this.props.cart.length} / 10</h4>
      </div>
    );
  }
}

export default Package;
