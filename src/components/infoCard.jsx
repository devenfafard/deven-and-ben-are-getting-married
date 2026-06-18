import React from "react";

import './infoCard.css';
import Wave from '../components/wave.jsx';

import SecurityLevel from "../Data/SecurityLevel.jsx";

const infoCard = ({color = "Transparent", title = "", body = "",showBox = false, showWave = false, mirrorWave = false, securityLevelNeeded = 0}) =>
{
    let wave = '';
    if(showWave)
    {
        wave = <Wave/>;

        if(mirrorWave)
        {
            wave = <Wave isMirror={true}/>;
        }
    }

    let textBox = '';

    if(showBox)
    {
        textBox = <div className="info-card-box"><h2>{title}</h2><p>{body}</p></div>
    }
    else
    {
        textBox = <div className="info-card-content"><h2>{title}</h2><p>{body}</p></div>;
    }

    console.log(SecurityLevel.prototype.level);
    if(SecurityLevel.prototype.level > securityLevelNeeded)
    {

        textBox = '';
        //textBox = <div className="info-card-box"><h2>"Sign in here!"</h2></div>;
    }

    return (
        <div className="info-card" style={{backgroundColor: color, fill: color}}>
            {wave}
            {textBox}
        </div>
    )
}

export default infoCard;