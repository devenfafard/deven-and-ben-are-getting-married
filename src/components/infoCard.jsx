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

    if(SecurityLevel.GetLevel() < securityLevelNeeded)
    {
        textBox = <div className="info-card-box"><h2>Sign in here!</h2><button onClick={()=>{AddSecurityLevel()}} >Bump it up</button></div>;
    }

    function AddSecurityLevel()
    {
        SecurityLevel.AddLevel();
        window.location.reload();
    }

    return (
        <div className="info-card" style={{backgroundColor: color, fill: color}}>
            {wave}
            {textBox}
        </div>
    )
}

export default infoCard;