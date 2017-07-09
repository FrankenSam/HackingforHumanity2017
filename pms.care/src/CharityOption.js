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
        <div className='container'>
          <div className='col-md-6 default'>
            <h2>Pick-Your-Own</h2>
            <p>The option to chose your own organization from our list of organization support women.</p>
            <button className='btn' onClick={this.handleCustomClick}>Choose this option</button>
          </div>
          <div className='col-md-6 pick'>
            <h2>July's Organization</h2>
            <p>This month we’ve chosen Mary’s Place. Mary’s Place is a leading voice for homeless women, children, and families in emergency situations.</p>
            <button className='btn' onClick={this.handleDefaultClick}>Choose this option</button>
          </div>  
        </div>
        {this.state.clicked ? <button className='btn' onClick={this.handleButtonClick}>Next</button> : ''}
      </div>
    );
  }
}

export default CharityOption;
