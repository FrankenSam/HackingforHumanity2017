import React, { Component } from 'react';
import './App.css';


class CharityDetails extends Component {
  constructor() {
    super();
  }

  render() {
    var url = 'https://' + this.props.charity.website;
    return (
      <div>
        <h4>{this.props.charity.name}</h4>
        <p>{this.props.charity.category}</p>
        <p>{this.props.charity.rating}</p>
        <p>{this.props.charity.description}</p>
        <a href={url} target="_blank">{url}</a>
      </div>
    );
  }
}

export default CharityDetails;