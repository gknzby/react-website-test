import React, { Component } from 'react';

import Banner from '../components/Banner';
import Categories from '../components/Categories';
import Section from '../components/Section';

class HomePage extends Component
{


    render()
    {


        return(
            <div className = "main">
                <Banner/>
                <Categories changePage = {this.props.changePage}/>
            </div>
        );
    }
}

export default HomePage;