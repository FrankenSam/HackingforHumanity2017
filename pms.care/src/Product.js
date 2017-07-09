import React, { Component } from 'react';
import './App.css';

class Product extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    console.log(this.props.index);
    this.props.addToCart(this.props.catagory, this.props.index);
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.desc}</p>
        <img src={this.props.image} />
        <button onClick={this.handleClick}>Add to cart</button>
      </div>
    );
  }
}

export default Product;
