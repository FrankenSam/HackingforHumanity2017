import React, { Component } from 'react';

class CharityDetails extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h4>{this.props.charity.name}</h4>
        <p>{this.props.charity.category}</p>
        <p>{this.props.charity.rating}</p>
        <p>{this.props.charity.description}</p>
        <p>{this.props.charity.website}</p>
      </div>
    );
  }
}

export default CharityDetails;