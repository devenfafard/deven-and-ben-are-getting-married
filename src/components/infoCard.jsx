import React from "react";

import './infoCard.css';
import Wave from '../components/wave.jsx';

const infoCard = ({color, title, desc}) =>
{
    return (
        <div className="info-card" style={{backgroundColor: color, fill: color}}>
            <Wave/>
            <div className="info-card-content">
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default infoCard;