import React, { Component } from 'react';
import Hobbies from '../components/Hobbies';
import Knowledges from '../components/Knowledges';
import NavSide from '../components/Navside';
import Section from '../components/Section';

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function WhoIAm(props)
{

    return(
        <div className = "wia">
            <div className = "wiaImg">
                <span>Image placeholder</span>
            </div>
            <div className = "wiaContent">
                <p>
                    {loremIpsum}
                </p>
            </div>
        </div>
    );
}

function EducationCard(props)
{

    return (
        <div className = "educationCard">
            <h3 className = "schoolName">{props.schoolInfo.name}</h3>
            <p className = "schoolDate">{props.schoolInfo.dates}</p>
            <p className = "schoolDegree">{props.schoolInfo.degree} - {props.schoolInfo.department}</p>
            <p className = "schoolContent">{props.schoolInfo.content}</p>
        </div>
    );
}

function Education(props)
{
    let universityInfo = {
        name : "My University Name",
        department : "Computer Engineer",
        degree : "Bachelor's Degree",
        dates : "2015 - 2021",
        content : loremIpsum,
    }

    let highschoolInfo = {
        name : "My Highschool Name",
        department : "Natural Sciences",
        degree : "Highschool",
        dates : "2011 - 2015",
        content : loremIpsum,
    }

    return (
        <div className = "education">
            <EducationCard schoolInfo = {highschoolInfo}/>
            <EducationCard schoolInfo = {universityInfo}/>
        </div>
    );
}

export default function AboutMe(props)
{
    let navsideList = [];
    navsideList.push({title : "Who Am I?", url : "whoIAm"});
    navsideList.push({title : "Education", url : "education"});
    navsideList.push({title : "Knowledges", url : "knowledges"})
    navsideList.push({title : "Career", url : "career"});
    navsideList.push({title : "Hobbies", url : "hobbies"});


    let hobbyList = [];
    hobbyList.push({title : "Swimming", content : "I think swimming is the best exercise. Swimming is fun for me and at the same time very healty. I swim at every opportunity. (Actually not every but mostly)"});
    hobbyList.push({title : "Historical Europian Martial Arts", content : "Sometimes you wanna swing a sword, you swings a sword. Yeah its true. And when you swings a sword, you feel like 'this should be a sport' and finds that sport and joins them"});
    hobbyList.push({title : "Cycling", content : "Cycling is like cycling. You cycling and goes somewhere. Others cycling and goes somewhere too. I think my england is bad in this content but who cares. (definetly not me)"});
    hobbyList.push(hobbyList[0]);
    hobbyList.push(hobbyList[1]);
    hobbyList.push(hobbyList[2]);

    let knowdledgeList = [];
    knowdledgeList.push({title : "Turkish", level : "Native", content : "Turkish is my native language so I can't write about this so much."});
    knowdledgeList.push({title : "English", level : "Advanced", content : "I'm very good at reading and writing but I'm bad at listening and speaking because I can't practice them in real life."});
    knowdledgeList.push(knowdledgeList[0]);
    knowdledgeList.push(knowdledgeList[1]);
    knowdledgeList.push(knowdledgeList[1]);
    knowdledgeList.push(knowdledgeList[1]);
    knowdledgeList.push(knowdledgeList[0]);

    return(
        <div className = "pages">
            <NavSide list = {navsideList}/>
            <Section title = "Who Am I?" id = "whoIAm">
                <WhoIAm />
            </Section>
            <Section title = "Education" id = "education">
                <Education />
            </Section>
            <Section title = "Knowledges" id = "knowledges">
                <Knowledges list = {knowdledgeList} />
            </Section>
            <Section title = "Career" id = "career">
                
            </Section>
            <Section title = "Hobbies" id = "hobbies">
                <Hobbies list = {hobbyList} />
            </Section>

        </div>
    );

}