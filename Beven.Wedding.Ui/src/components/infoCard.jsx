import React from "react";

import './infoCard.css';
import Wave from '../components/wave.jsx';

const infoCard = ({infoData = { color : "Transparent", title : "", body: ""}, content, showWave = true, mirrorWave = false}) =>
{
    let wave = '';
    if(showWave) {
        wave = <Wave/>;

        if (mirrorWave) {
            wave = <Wave isMirror={true}/>;
        }
    }

    return (
        <div className="info-card" style={{backgroundColor: infoData.color, fill: infoData.color}}>
            {wave}
            <div className="info-card-content"><h2>{infoData.title}</h2><p>{infoData.body}</p>{content}</div>
        </div>
    )
}

export default infoCard;