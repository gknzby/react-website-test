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
                <img src = "myPhoto.png" alt = "My Photo"/>
            </div>
            <div className = "wiaContent">
                <p>
                I've loved problem solving for as long as I can remember. The harder a problem is, the more fun it has been for me to solve it. When I became an engineer, I took advantage of this. My favorite aspect of studying engineering is always the possibility that you may encounter a problem that you have never faced before.
                <br/> <br/>
                On the other hand, I do not agree with the prejudices about engineers being "asocial". I am a person who loves meeting new people and enjoys being in many different social environments. I have always been the person taking control of the group and managing the project in project groups at school.
                <br/> <br/>
                You can contact me at one of the addresses below to contact me on any subject. I am also open to people who are eager to learn and seek someone to consult.
                <br/> <br/> <br/> <br/>
                E-Mail : gokhanozbey7@gmail.com
                <br/>
                Linkedin : <a href = "https://www.linkedin.com/in/gknzby/" target = "_blank ">https://www.linkedin.com/in/gknzby/</a>
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
    let highschoolInfo = {
        name : "Antakya Anatolian High School ",
        department : "Natural Sciences",
        degree : "Highschool",
        dates : "2011 - 2015",
        content : "I studied high school in Antakya's oldest high school. I studied natural sciences such as physics, biology and chemistry in high school.",
    }

    let universityInfo = {
        name : "Eskişehir Osmangazi University",
        department : "Computer Engineer",
        degree : "Bachelor's Degree",
        dates : "2015 - 2021",
        content : "Here I learned not only programming but also how to become an engineer. The task of a computer engineer is not just to solve a problem, but to solve it in the best possible way. This requires not only better coding, but also a lot of teaching. I have learned these during my time here.",
    }

    return (
        <div className = "education">
            <EducationCard schoolInfo = {highschoolInfo}/>
            <EducationCard schoolInfo = {universityInfo}/>
        </div>
    );
}

function getHobbyList()
{
    let hobbyList = [];
    hobbyList.push({
        title : "Swimming", 
        content : "",
        });
    hobbyList.push({
        title : "Historical Europian Martial Arts", 
        content : "",
        });
    hobbyList.push({
        title : "Cycling", 
        content : "",
        });

    return hobbyList;
}

function getKnowledgeList()
{
    let knowdledgeList = [];
    knowdledgeList.push({
        title : "Turkish", 
        level : "Native", 
        content : ""
    });
    knowdledgeList.push({
        title : "English", 
        level : "Advanced", 
        content : ""
    });
    knowdledgeList.push({
        title : "HTML/CSS", 
        level : "Advanced", 
        content : ""
    });
    knowdledgeList.push({
        title : "JavaScript", 
        level : "Advanced", 
        content : ""
    });
    knowdledgeList.push({
        title : "React", 
        level : "Beginner-Advanced", 
        content : ""
    });
    knowdledgeList.push({
        title : "React-Native", 
        level : "Beginner-Advanced", 
        content : ""
    });

    return knowdledgeList;
}

export default function AboutMe(props)
{
    let navsideList = [];
    navsideList.push({title : "Who Am I?", url : "whoIAm"});
    navsideList.push({title : "Education", url : "education"});
    navsideList.push({title : "Knowledges", url : "knowledges"})
    navsideList.push({title : "Career", url : "career"});
    navsideList.push({title : "Hobbies", url : "hobbies"});


    let hobbyList = getHobbyList();


    let knowdledgeList = getKnowledgeList();

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
                <p>Unfortunately I don't have any career experience at the moment. :(</p>
            </Section>
            <Section title = "Hobbies" id = "hobbies">
                <Hobbies list = {hobbyList} />
            </Section>

        </div>
    );

}