import {useState } from "react"
import PopScreen from "./PopScreen";

export default function Designs(props)
{
    const [popScreenStyle, setPopScreenStyle] = useState("popScreenHidden");
    const [popScreenContent, setPopScreenContent] = useState(<></>);

    const handleClick = (image) => {
        setPopScreenContent(<img src={image} alt = "big"/>);
        setPopScreenStyle("popScreenShow");
    }

    const handlePopClose = () =>
    {
        setPopScreenStyle("popScreenHidden");
    }

    let designData = getDesignData();
    let designList = [];
    for(const element of designData)
    {
        designList.push(<DesignCard title = {element.title} image = {element.image} content = {element.content} handleClick = {handleClick}/>);
    }

    return(
        <div className = "designs">
            <PopScreen screenStyle = {popScreenStyle} handleClose = {handlePopClose}>
                {popScreenContent}
            </PopScreen>
            {designList}
        </div>
    );
}

function DesignCard(props)
{
    const handleClick = () => {
        props.handleClick(props.image);
    }

    return(
        <div className = "designCard" onClick = {handleClick}>
            <img src={props.image} alt = {props.title}/>
            <h3>{props.title}</h3>
        </div>
    );
}

function getDesignData()
{
    let data = [];
    data.push({
        title : "ESDOT Poster",
        image : "designs/esdotPoster.png",
        content : "Wksdof sdfsf sDFfıds skfdosf sfsdfkosdf sdfsofs fsdfkopsdfks skfopsdfo sdfkıosd fjsdı fjsdıfsd jfsdıfjsdıfjsdı jfısd",
    });
    data.push({
        title : "ESDOT Breakfast",
        image : "designs/esdotBreakfast.png",
        content : "Wksdof sdfsf sDFfıds skfdosf sfsdfkosdf sdfsofs fsdfkopsdfks skfopsdfo sdfkıosd fjsdı fjsdıfsd jfsdıfjsdıfjsdı jfısd sdfdsfds fsdfsd fsdfsd fsd fsd fsd fds fqefwefwe fwefewfdweswfw efdsfafew",
    });
    data.push({
        title : "ESOGU HAMER Hip-Hop",
        image : "designs/esoguhamer.png",
        content : "Wksdof sdfsf sDFfıds skfdosf sfsdfkosdf sdfsofs fsdfkopsdfks skfopsdfo sdfkıosd fjsdı fjsdıfsd jfsdıfjsdıfjsdı jfısd",
    });


    return data;
}