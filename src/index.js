import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import HomePage from './screens/HomePage.js';
import AboutMe from './screens/AboutMe';
import Works from './screens/Works';
import Contact from './screens/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

class Root extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      page : <Works changePage = {this.changePage}/>,
      navbar : <Navbar changePage = {this.changePage}/>,
    }
  }

  changePage = (pageName) =>
  {
    console.log(pageName);

    let newPage = <HomePage changePage = {this.changePage}/>;
    let newNavbar = <></>;

    if(pageName === "home")
    {
      newPage = <HomePage changePage = {this.changePage}/>;
      newNavbar = <></>;
    }
    else if (pageName === "about")
    {
      newPage = <AboutMe changePage = {this.changePage}/>;
      newNavbar = <Navbar changePage = {this.changePage}/>;
    }
    else if (pageName === "works")
    {
      newPage = <Works changePage = {this.changePage}/>;
      newNavbar = <Navbar changePage = {this.changePage}/>;
    }
    else if (pageName === "contact")
    {
      newPage = <Contact changePage = {this.changePage}/>;
      newNavbar = <Navbar changePage = {this.changePage}/>;
    }

    this.setState({
      page : newPage,
      navbar : newNavbar,
    });
  }


  render()
  {


    return(
      <div>
        <div className = "main">
          {this.state.navbar}
          {this.state.page}
        </div>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);