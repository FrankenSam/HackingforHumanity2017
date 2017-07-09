import React, { Component } from 'react';
import './App.css';

class CharityOption extends Component {
  constructor() {
    super();
    this.state = {
      'clicked': false,
      'custom': false,
      'default': false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleDefaultClick = this.handleDefaultClick.bind(this);
    this.handleCustomClick = this.handleCustomClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: true
    });
  }

  handleCustomClick() {
    this.handleClick();
    this.setState({
      custom: true
    });
    this.props.customCharityIsChosen
  }

  handleDefaultClick() {
    this.handleClick();
    this.setState({
      default: true
    });
  }

  handleButtonClick() {
    console.log('here');
    if (this.state.custom) {
      this.props.customCharityIsChosen();
    } else {
      this.props.charityIsChosen();
    }
  }

  render() {
    return (
      <div>
        <h1>Choose your charity</h1>
        <img src='http://via.placeholder.com/150x150'/>
        <label for="default">Our Choice</label>
        <input onClick={this.handleDefaultClick} type="radio" id="default" value="default"/>
        <img src='http://via.placeholder.com/150x150'/>
        <label for="pick">Pick your own women charity</label>
        <input onClick={this.handleCustomClick} type="radio" id="pick" value="pick"/>
        {this.state.clicked ? <button onClick={this.handleButtonClick}>Next</button> : ''}
      </div>
    );
  }
}

export default CharityOption;
