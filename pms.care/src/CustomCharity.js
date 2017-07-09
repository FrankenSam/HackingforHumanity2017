import React, { Component } from 'react';
import CharityDetails from './CharityDetails';

class CustomCharity extends Component {
  constructor() {
    super();
    this.state = {
      'charityIsSelected': false,
      'displayCharities': false,
      'displayCategories': true,
      'selectedCharity': {},
      'selectedCategory': ''
    }


  }

  getCharityList(category, charityList){
    var charitiesByCategory = [];
    for(var charity in charityList){
      if(charity.category === category){
        charitiesByCategory.push(charity);
      }
    }
    return charitiesByCategory;
  }

  render() {
    return (
      <div>
        Chose Your Charity
        {this.state.displayCategories ? this.props.charityCategories.map((charity, index) => {
          return <button>{charity}</button>
        }) : ''}
        
        {this.state.charityIsSelected ? <CharityDetails charity={this.state.selectedCharity} /> : ''}
      </div>
    );
  }
}

export default CustomCharity;
