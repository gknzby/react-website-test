export default function Section(props)
{

    return (
        <div className = "section" id = {props.id}>
            <div className = "sectionTitle">
                <h2>{props.title}</h2>
            </div>
            <div className = "sectionContent">
                {props.children}
            </div>
        </div>
    )
}