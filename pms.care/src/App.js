import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from './Nav';
import Package from './Package';
import Footer from './Footer';
import CharityOption from './CharityOption';
import CustomCharity from './CustomCharity';
import Landing from './Landing';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      'charityList': [
        {
          'name': 'PAI',
          'category': 'REPRODUCTIVE HEALTH, FAMILY PLANNING, & ABORTION',
          'rating': 'A',
          'description': 'Champions policies that make it possible for women to exercise their reproductive rights, and fights to remove the policy barriers between women and the care they need; works with policymakers in Washington & its network of partners in developing countries to advance women\'s reproductive rights.',
          'website': 'www.pai.org'
        },
         {
          'name': 'National Alliance to End Homelessness',
          'category': 'HOMELESSNESS',
          'rating': 'A+',
          'description': 'Preventing and ending homelessness in the United States.',
          'website': 'www.endhomelessness.org'
        },
         {
          'name': 'Bowery Residents\' Committee',
          'category': 'HOMELESSNESS',
          'rating': 'A',
          'description': 'To meet the needs of people with low income, homeless, hungry, chemically dependent, psychiatrically disabled, aged and persons with HIV and AIDS. Provides a comprehensive array of services, including health care, vocational rehabilitation, AIDS services, community education and advocacy.',
          'website': 'www.brc.org'
        },
         {
          'name': 'Center for Community Change',
          'category': 'HOMELESSNESS',
          'rating': 'A-',
          'description': 'To build the power and capacity of low-income people, especially low-income people of color, to change their communities and public policies for the better.',
          'website': 'www.communitychange.org'
        },
        {
          'name': 'Astraea Lesbian Foundation for Justice',
          'category': 'LGBTQ RIGHTS & ADVOCACY',
          'rating': 'A',
          'description': 'Funds LGBTQI activism globally, serving as a feminist social justice hub and working side-by-side with grantee and donor partners to achieve rural, economic, social and gender justice worldwide.',
          'website': 'www.astraeafoundation.org'
        },
               {
          'name': 'Trevor Project',
          'category': 'LGBTQ RIGHTS & ADVOCACY',
          'rating': 'A',
          'description': 'To end suicide among lesbian, gay, bisexual, transgender and questioning (LGBTQ) young people.',
          'website': 'www.thetrevorproject.org'
        },
               {
          'name': 'Center for Reproductive Rights',
          'category': 'WOMEN RIGHTS',
          'rating': 'A-',
          'description': 'Legal advocacy organization dedicated to promoting and defending women\'s reproductive rights worldwide; uses the law to advance reproductive freedom as a fundamental human right that all governments are legally obligated to protect, respect, & fulfill.',
          'website': 'www.reproductiverights.org'
        },
               {
          'name': 'Global Fund for Women',
          'category': 'WOMEN RIGHTS',
          'rating': 'A',
          'description': 'Global champion for the human rights of women & girls; uses its powerful networks to find, fund, and amplify the courageous work of women who are building social movements & challenging the status quo.',
          'website': 'www.globalfundforwomen.org'
        },
                       {
          'name': 'Guttmacher Institute',
          'category': 'WOMEN RIGHTS',
          'rating': 'A-',
          'description': 'To advance sexual & reproductive health & rights through an interrelated program of research, policy analysis, and communications & publications designed to generate new ideas, encourage enlightened public debate, and promote sound policy & program development.',
          'website': 'www.guttmacher.org'
        },
                               {
          'name': 'Women for Women International U.S.',
          'category': 'WOMEN RIGHTS',
          'rating': 'B+',
          'description': 'In countries affected by conflict & war, supports the most marginalized women to earn & save money, improve health & well-being, influence decisions in their home & community, and connect to networks for support.',
          'website': 'www.womenforwomen.org'
        },
                               {
          'name': 'Planned Parenthood Federation of America',
          'category': 'REPRODUCTIVE HEALTH, FAMILY PLANNING, & ABORTION',
          'rating': 'A-',
          'description': 'Ensuring the provision of comprehensive reproductive and complementary health services in settings which preserve and protect the essential privacy and rights of each individual; advocating public policies which guarantee these rights and ensure access to such services; providing educational programs which enhance understanding of individual and societal implications of human sexuality; and promoting research and the advancement of technology in reproductive health care and encouraging the understanding of their inherent bioethical, behavioral, and social implications.',
          'website': 'www.plannedparenthood.org'
        },
                               {
          'name': 'EngenderHealth ',
          'category': 'WOMEN HEALTH',
          'rating': 'A-',
          'description': 'To improve the health and well-being of people in the poorest communities of the world by sharing expertise in sexual and reproductive health and transforming of the quality of health care.',
          'website': 'www.engenderhealth.org'
        },
                               {
          'name': 'Fistula Foundation',
          'category': 'REPRODUCTIVE HEALTH, FAMILY PLANNING, & ABORTION',
          'rating': 'A',
          'description': 'To raise awareness of and funding for fistula repair, prevention, and educational programs worldwide.',
          'website': 'www.fistulafoundation.org'
        },
                               {
          'name': 'Breast Cancer Prevention Partners',
          'category': 'WOMEN HEALTH',
          'rating': 'A-',
          'description': 'Working to stop breast cancer before it starts by exposing and eliminating the environmental causes of the disease.',
          'website': 'www.bcpp.org'
        },
                               {
          'name': 'Breast Cancer Research Foundation',
          'category': 'WOMEN HEALTH',
          'rating': 'A+',
          'description': 'To prevent and cure breast cancer by advancing the world\'s most promising research.',
          'website': 'www.bcrfcure.org'
        }
      ],
      'charityCategories': [
        'WOMEN HEALTH',
        'WOMEN RIGHTS',
        'REPRODUCTIVE HEALTH, FAMILY PLANNING, & ABORTION',
        'HOMELESSNESS',
        'LGBTQ RIGHTS & ADVOCACY'
      ],

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
      'cart': [],
      'isCharityChosen': false,
      'customCharityIsChosen': false,
      'processStarted': false
    }
    this.addToCart = this.addToCart.bind(this);
    this.charityIsChosen = this.charityIsChosen.bind(this);
    this.customCharityIsChosen = this.customCharityIsChosen.bind(this);
    this.startProcess = this.startProcess.bind(this);
  }

  addToCart(list, index){
    let item = this.state[list][index];
    let tempCart = this.state.cart;
    tempCart.push(item);
    this.setState({
      cart: tempCart
    });
  }

  charityIsChosen() {
    this.setState({
      isCharityChosen: true
    });
  }

  customCharityIsChosen() {
    console.log('herefadsfdafdasf')
    this.setState({
      customCharityIsChosen: true
    });
  }

  startProcess() {
    this.setState({
      processStarted: true
    });
  }

  render() {
    return (
      <div className="App">
        <Nav />
        {!this.state.processStarted ? <Landing processStarted={this.startProcess}/> : this.state.isCharityChosen ? 
        <Package mindItems={this.state.mindItems} bodyItems={this.state.bodyItems} soulItems={this.state.soulItems} cart={this.state.cart}
        addToCart={this.addToCart}/> 
        : this.state.customCharityIsChosen ? <CustomCharity charityList={this.state.charityList} charityCategories={this.state.charityCategories} charityIsChosen={this.charityIsChosen}/> :
        <CharityOption customCharityIsChosen={this.customCharityIsChosen}  charityIsChosen={this.charityIsChosen}/>}
        {this.state.isCharityChosen ? <Footer cart={this.state.cart} /> : ''}
      </div>
    );
  }
}

export default App;
