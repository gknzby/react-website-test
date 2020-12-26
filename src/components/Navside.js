function NavsideElement(props)
{
    let href = "#" + props.url;

    return (
        <a href = {href}>
            <div className = "navsideElement">
                {props.title}
            </div>
        </a>
    )
}

export default function NavSide(props)
{
    let linkList = [];

    for(const element of props.list)
    {
        linkList.push(<NavsideElement title = {element.title} url = {element.url} />);
    }

    return (
        <div className = "navside">
            <div className = "navsideList">
                {linkList}
            </div>
        </div>
    )
}