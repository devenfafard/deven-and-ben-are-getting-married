import React from "react";
import { useState } from "react";

import './home.css';
import InfoCard from "../components/infoCard.jsx";

const Home = () =>
{
    const [level, setLevel] = useState(0);
    function SetLevel()
    {
        setLevel(level + 1);
    }

    return (
        <div className="home">
            <div className="landing">
                <h1>Deven and Ben are getting married!</h1>
                <button onClick={SetLevel}>up level</button>
            </div>

            <div className="home-content">
                <InfoCard color={'#CDB084'} title={"Deven and Ben reaaaaallly love each other!"} desc={"Log in to see if you are invited!"}/>
                {level >= 1 && (<InfoCard color={'#3d472f'} title={"Engagement Party!"} desc={"its gonna be like a dragon or somethins"}/>)}

            </div>
        </div>
    )
}

export default Home;