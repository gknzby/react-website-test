import React, { Component } from 'react';
import CategoriCard from './CategoriCard';

class Categories extends Component
{

    
    changePage = (pageName) =>
    {
        this.props.changePage(pageName);
    }

    render()
    {


        return(
            <div className = "categories">
                <CategoriCard title = "İşlerim" page = "works" changePage = {this.changePage}/>
                <CategoriCard title = "Ben Kimim?" page = "about" changePage = {this.changePage}/>
                <CategoriCard title = "İletişim" page = "contact" changePage = {this.changePage}/>
            </div>
        );
    }
}

export default Categories;