import React, { Component } from 'react';
import Designs from '../components/Designs';
import NavSide from '../components/Navside';
import Section from '../components/Section';

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";


function getPublishedData()
{
    let data = [];
    data.push({
        title : "gknzby.com v1.0",
        startDate : "2020 - 12 - 24",
        publishDate : "2020 - 12 - 28",
        type : "Personal Web Site",
        tags : "HTML, CSS, JavaScript, React",
        content : loremIpsum,
    })

    return data;
}

function getWIPData()
{
    let data = [];
    data.push({
        title : "Personal Trainer",
        startDate : "2020 - 12 - 14",
        publishDate : "Estimated 2021 January",
        type : "Sport&Diet Mobile Application",
        tags : "HTML, CSS, JavaScript, React, React-Native",
        content : loremIpsum,
    })

    return data;
}

function WorkCard(props)
{
    return(
        <div className = "workCard">
            <div className = "workCardLeft">
                <h3 className = "workCardTitle">{props.list.title}</h3>
                <div className = "workCardDate">
                    <p>Start Date: {props.list.startDate}</p>
                    <p>Publish Date: {props.list.publishDate}</p>
                </div>
            </div>
            <div className = "workCardRight">
                <div className = "workCardType">
                    <p>{props.list.type}</p>
                </div>
                <div className = "workCardTag">
                    <p>{props.list.tags}</p>
                </div>
                <div className = "workCardContent">
                    <p>{props.list.content}</p>
                </div>
            </div>
        </div>
    );
}


export default function Works(props)
{
    let navsideList = [];
    navsideList.push({title : "Published", url : "published"});
    navsideList.push({title : "Work In Progress", url : "wip"});
    navsideList.push({title : "Design Works", url : "design"});
    navsideList.push({title : "Github Repositories", url : "github"});

    let publishedData = getPublishedData();
    let publishedList = [];
    for(const element of publishedData)
    {
        publishedList.push(<WorkCard list = {element}/>);
    }

    let wipData = getWIPData();
    let wipList = [];
    for(const element of wipData)
    {
        wipList.push(<WorkCard list = {element}/>);
    }


    return(
        <div className = "pages">
            <NavSide list = {navsideList}/>
            <Section title = "Published" id = "published">
                {publishedList}
            </Section>
            <Section title = "Work In Progress" id = "wip">
                {wipList}
            </Section>
            <Section title = "Design Works" id = "design">
                <Designs />
            </Section>
            <Section title = "Github Repositories" id = "github">

            </Section>
        </div>
    );
}