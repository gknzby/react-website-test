export default function Knowledges(props)
{
    let knowdledgeList = [];

    for(const element of props.list)
    {
        knowdledgeList.push(<KnowledgeCard title = {element.title} content = {element.content} level = {element.level} />)
    }

    return(
        <div className = "knowledges">
            {knowdledgeList}
        </div>
    );
}

function KnowledgeCard(props)
{


    return(
        <div className = "knowledgeCard">
                <h3 className = "knowledgeTitle">{props.title}</h3>
                <p className = "knowledgeLevel">{props.level}</p>
                <p className = "knowledgeContent">{props.content}</p>
        </div>
    );
}