import React, { Component } from 'react';
import CharityDetails from './CharityDetails';
import './App.css';


class CustomCharity extends Component {
  constructor() {
    super();
    this.state = {
      'charityIsSelected': false,
      'displayCharities': false,
      'displayCategories': true,
      'selectedCharitiesList': [],
      'selectedCharity': {},
      'selectedCategory': ''
    }
    this.getCharityList = this.getCharityList.bind(this);
    this.selectCategory = this.selectCategory.bind(this);


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

  selectCategory(category, charityList){
    console.log(charityList);
    var selectedCharitiesList = this.getCharityList(category, charityList);
    this.setState({
      displayCategories: false,
      displayCharities: true,
      selectedCharitiesList: selectedCharitiesList
    });
  }

  test(){
    console.log(this.props.charityList);
  }

  render() {
    return (
      <div>
        Chose A Category!
        {this.state.displayCategories ? this.props.charityCategories.map((category, index) => {
          return <button onClick={this.selectCategory.bind(category, this.props.charityList)}>{category}</button>
        }) : ''}


        {this.state.displayCharities ? this.state.selectedCharitiesList.map((charity, index) => {
          return <button>{charity.name}</button>
        }) : ''}
        
        {this.state.charityIsSelected ? <CharityDetails charity={this.state.selectedCharity} /> : ''}
      </div>
    );
  }
}

export default CustomCharity;
