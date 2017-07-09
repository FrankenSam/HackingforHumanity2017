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
    this.selectCharity = this.selectCharity.bind(this);
    this.goBack = this.goBack.bind(this);
    this.handleNext = this.handleNext.bind(this);


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

  selectCharity(name, charity){
    this.setState({
      charityIsSelected: true,
      selectedCharity: charity
    });
  }

  goBack(){
    this.setState({
      displayCategories: true,
      displayCharities: false,
      selectedCharitiesList: {},
      selectedCharity: {},
      charityIsSelected: false
    });
  }

  handleNext(){
    this.props.charityIsChosen();
  }

  render() {
    return (
      <div>
        <h2>Choose A Category!</h2>
        <br></br>
        {this.state.displayCategories ? this.props.charityCategories.map((category, index) => {
          return <button className='btn' onClick={this.selectCategory.bind(this,category, this.props.charityList)}>{category}</button>
        }) : ''}


        {this.state.displayCharities ? this.state.selectedCharitiesList.map((charity, index) => {
          return <button className='btn' onClick={this.selectCharity.bind(this, charity.name, charity)}>{charity.name}</button>
        }) : ''}

        <br></br>
        {this.state.displayCharities ? <button className='btn' onClick={this.goBack}>Go Back</button>: ''}
        
        {this.state.charityIsSelected ? <CharityDetails charity={this.state.selectedCharity} /> : ''}
        {this.state.charityIsSelected ? <button onClick={this.handleNext}>Next</button> : ''}
      </div>
    );
  }
}

export default CustomCharity;
