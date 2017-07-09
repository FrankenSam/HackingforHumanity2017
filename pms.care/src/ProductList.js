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
        {this.props.items.map((item, index) => {
          return <Product title={item.title} desc={item.desc} image={item.img} catagory={this.props.catagory} index={index} addToCart={this.props.addToCart}/>
        })}
      </div>
    );
  }
}

export default ProductList;
