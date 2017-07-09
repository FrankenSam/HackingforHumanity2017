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
    this.goBack = this.goBack.bind(this);


  }

  getCharityList(category, charityList){
    var charitiesByCategory = [];
    for(var i =0; i<charityList.length; i++){
      if(charityList[i].category == category){
        charitiesByCategory.push(charityList[i]);
      }
    }
    return charitiesByCategory;
  }

  selectCategory(category, charityList){
    var selectedCharitiesList = this.getCharityList(category, charityList);
    this.setState({
      displayCategories: false,
      displayCharities: true,
      selectedCharitiesList: selectedCharitiesList
    });
  }

  goBack(){
    this.setState({
      displayCategories: true,
      displayCharities: false,
      selectedCharitiesList: {}
    });
  }

  render() {
    return (
      <div>
        Chose A Category!
        {this.state.displayCategories ? this.props.charityCategories.map((category, index) => {
          return <button onClick={this.selectCategory.bind(this,category, this.props.charityList)}>{category}</button>
        }) : ''}


        {this.state.displayCharities ? this.state.selectedCharitiesList.map((charity, index) => {
          return <button>{charity.name}</button>
        }) : ''}

        {this.state.displayCharities ? <button onClick={this.goBack}>Go Back</button>: ''}
        
        {this.state.charityIsSelected ? <CharityDetails charity={this.state.selectedCharity} /> : ''}
      </div>
    );
  }
}

export default CustomCharity;
