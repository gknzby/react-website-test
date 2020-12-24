import React, { Component } from 'react';




class Navbar extends Component
{

    handleHomeClick = (event) =>
    {
        event.preventDefault();

        this.props.changePage("home");
    }

    render()
    {

        return(
            <div className = "navbar">
                <a href = "Ana Sayfa" onClick = {this.handleHomeClick}>
                    <div className = "navbarTitle">
                        <h1>GKNZBY</h1>
                    </div>
                </a>
            </div>
        );
    }
}

export default Navbar;