import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from './Nav';
import Package from './Package';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      'mindItems': [
        {
          'img': 'http://via.placeholder.com/150x150',
          'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ',
          'title': 'Mind 1'
        },
        {
          'img': 'http://via.placeholder.com/150x150',
          'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ',
          'title': 'Mind 2'
        },
        {
          'img': 'http://via.placeholder.com/150x150',
          'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ',
          'title': 'Mind 3'
        }
      ],
      'bodyItems': [
        {
          'img': 'http://via.placeholder.com/150x150',
          'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ',
          'title': 'Body Item 1'
        },
        {
          'img': 'http://via.placeholder.com/150x150',
          'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ',
          'title': 'Body Item 2'
        },
        {
          'img': 'http://via.placeholder.com/150x150',
          'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ',
          'title': 'Body Item 3'
        }
      ],
      'soulItems': [
        {
          'img': 'http://via.placeholder.com/150x150',
          'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ',
          'title': 'Soul Items 1'
        },
        {
          'img': 'http://via.placeholder.com/150x150',
          'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ',
          'title': 'Soul Items 2'
        },
        {
          'img': 'http://via.placeholder.com/150x150',
          'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ',
          'title': 'Soul Items 3'
        }
      ],
      'cart': []
    }
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(list, index){
    let item = this.state[list][index];
    let tempCart = this.state.cart;
    tempCart.push(item);
    this.setState({
      cart: tempCart
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Package mindItems={this.state.mindItems} bodyItems={this.state.bodyItems} soulItems={this.state.soulItems} cart={this.state.cart}
        addToCart={this.addToCart}/>
      </div>
    );
  }
}

export default App;
