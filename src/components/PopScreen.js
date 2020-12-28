import { useEffect, useState } from "react"

export default function PopScreen(props)
{
    const [screenStyle, setScreenStyle] = useState(props.screenStyle);

    useEffect(() => {
        setScreenStyle(props.screenStyle);
    });

    return(
        <div className = {screenStyle}>
            <div className = "popScreenContent">
                <div className = "popScreenClose" onClick = {props.handleClose}>
                    X
                </div>
                {props.children}
            </div>
        </div>
    )
}