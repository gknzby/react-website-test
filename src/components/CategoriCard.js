import React, { Component } from 'react';

class CategoriCard extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            cardStyle : "categoryCard",
            imageStyle : "categoryImage",
            titleStyle : "categoryTitle",
        }
        
    }

    mouseEnter = () =>
    {
        this.setState({
            cardStyle : "categoryCardHover",
            imageStyle : "categoryImageHover",
            titleStyle : "categoryTitleHover",
        });
    }

    mouseOut = () =>
    {
        this.setState({
            cardStyle : "categoryCard",
            imageStyle : "categoryImage",
            titleStyle : "categoryTitle",
        });
    }

    handleMouseClick = (event) =>
    {
        event.preventDefault();

        this.props.changePage(this.props.page);
    }

    render()
    {
        let imgSource = this.props.page + ".png";


        return(
            <a href = {this.props.title} onClick = {this.handleMouseClick}>
                <div className = {this.state.cardStyle}
                    onMouseOver = {this.mouseEnter}
                    onMouseOut = {this.mouseOut} >
                    <div className = {this.state.imageStyle}>
                        <img src = {imgSource} alt = {this.props.title}/>
                    </div>
                    <h2 className = {this.state.titleStyle}>
                        {this.props.title}
                    </h2>
                </div>
            </a>
        );
    }
}

export default CategoriCard;