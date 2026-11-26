import React from "react";

import './infoCard.css';
import Wave from '../components/wave.jsx';

const infoCard = ({infoData = { color : "Transparent", textColor: "", title : "", body: ""}, content, showWave = true, mirrorWave = false}) =>
{
    let wave = '';
    if(showWave) {
        wave = <Wave/>;

        if (mirrorWave) {
            wave = <Wave isMirror={true}/>;
        }
    }

    return (
        <div className="info-card" style={{backgroundColor: infoData.color, fill: infoData.color, textColor: infoData.textColor}}>
            {wave}
            <div className="info-card-content"><h2 style={{color: infoData.textColor}}>{infoData.title}</h2><p style={{color: infoData.textColor}}>{infoData.body}</p>{content}</div>
        </div>
    )
}

export default infoCard;