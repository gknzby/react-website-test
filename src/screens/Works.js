import React, { Component } from 'react';
import Designs from '../components/Designs';
import NavSide from '../components/Navside';
import Section from '../components/Section';

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";


function getPublishedData()
{
    let data = [];
    data.push({
        title : <a href = "https://www.gknzby.com">gknzby.com v1.0</a>,
        startDate : "2020 - 12 - 24",
        publishDate : "2020 - 12 - 28",
        type : "Personal Web Site",
        tags : "HTML, CSS, JavaScript, React",
        content : "As a developer, I thought that the place where I could express myself best was the digital environment and I created this website to prepare the best environment to express myself in the digital environment. This website has a very simple design and I created it just to introduce myself. I avoided using premade items on this website as my goal is to show myself.",
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
        content : "The application is developed in order to strengthen the communication of a trainer with his students. While the trainer coaches the student with various tools on the application, the student can easily communicate with the trainer. Both the trainer and the student can follow the progress of the student.",
    });
    data.push({
        title : "Eskişehir HEMA",
        startDate : "2020 - 12 - 20",
        publishDate : "Estimated 2021 January",
        type : "Web site for Eskişehir HEMA Organization",
        tags : "HTML, CSS, JavaScript, React",
        content : "The website of Eskişehir Historical Martial Arts Association, of which I am a member. While providing information about HEMA sports on this website, it will also display announcements and events about the association.",
    });

    return data;
}

function getGITData()
{
    let data = [];
    data.push({
        title : "Personal Web Site",
        startDate : "2020 - 12 - 24",
        publishDate : "2020 - 12 - 24",
        type : "Personal Web Site",
        tags : "HTML, CSS, JavaScript, React, React-Native",
        content : "This repository has the first version of gknzby.com. Here I showcased the experiments I made while building a website. I make it publicly available for people like me who want to make their own personal website, and to create an opinion about my react experience.",
    });
    data.push({
        title : "Sport&Diet Mobile Application",
        startDate : "2020 - 12 - 14",
        publishDate : "2020 - 12 - 14",
        type : "Sport&Diet Mobile Application",
        tags : "HTML, CSS, JavaScript, React, React-Native",
        content : "Here's what I did when I was doing a mobile application for the first time using React-native. There are module and screen designs I made. Over time, I plan to develop this repository further and keep it as a grounded open source project.",
    });

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

    let gitData = getGITData();
    let gitList = [];
    for(const element of gitData)
    {
        gitList.push(<WorkCard list = {element}/>);
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
                {gitList}
            </Section>
        </div>
    );
}