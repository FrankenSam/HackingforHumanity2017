import React, { Component } from 'react';
import './App.css';


class CharityDetails extends Component {
  constructor() {
    super();
  }

  render() {
    var url = 'https://' + this.props.charity.website;
    return (
      <div className='charity-page'>
        <h4>{this.props.charity.name}</h4>
        <a href={url} target="_blank">Visit Website</a>
        <p>{this.props.charity.category}</p>
        <p>{this.props.charity.rating} Rating</p>
        <p>{this.props.charity.description}</p>
      </div>
    );
  }
}

export default CharityDetails;