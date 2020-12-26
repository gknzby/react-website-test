import React, { Component } from 'react';
import CategoriCard from './CategoriCard';

class Categories extends Component
{

    render()
    {


        return(
            <div className = "categories">
                <CategoriCard title = "My Works" page = "works" changePage = {this.props.changePage}/>
                <CategoriCard title = "About Me" page = "about" changePage = {this.props.changePage}/>
                <CategoriCard title = "Contact" page = "contact" changePage = {this.props.changePage}/>
            </div>
        );
    }
}

export default Categories;