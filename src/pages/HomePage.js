import React, { Component } from 'react';

import Banner from '../modules/Banner.js';
import Categories from '../modules/Categories';

class HomePage extends Component
{

    
    changePage = (pageName) =>
    {
        this.props.changePage(pageName);
    }

    render()
    {


        return(
            <div className = "main">
            <Banner/>
            <Categories changePage = {this.changePage}/>
            </div>
        );
    }
}

export default HomePage;