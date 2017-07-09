import React, { Component } from 'react';
import Product from './Product';
import './App.css';

class ProductList extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Inside ProductList with {this.props.catagory}</h1>
        {this.props.items.map((item, index) => {
          return <Product title={item.title} desc={item.desc} image={item.img} catagory={this.props.catagory} index={index} addToCart={this.props.addToCart}/>
        })}
      </div>
    );
  }
}

export default ProductList;
