export default function Hobbies(props)
{

    let hobbyList = [];

    for(const element of props.list)
    {
        hobbyList.push(<HobbyCard title = {element.title} content = {element.content} />);
    }

    return(
        <div className = "hobbies">
            {hobbyList}
        </div>
    );
}

function HobbyCard(props)
{


    return(
        <div className = "hobbyCard">
            <div className = "hobbyTitle">
                <h3>{props.title}</h3>
            </div>
            <div className = "hobbyContent">
                <p>{props.content}</p>
            </div>
        </div>
    );
}