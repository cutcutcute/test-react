import React, { MouseEventHandler } from "react";
import "../../app/styles/buttons.scss";

export const HeaderButton = (props: {src: string, click: MouseEventHandler }): React.JSX.Element => {
    return <div className="innerBlock" onClick={props.click}>
        <img src={props.src} alt="settings"/>
    </div>
}

