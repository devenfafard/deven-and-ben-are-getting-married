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

//#CDB084
    // TODO - make text box component to pass to info card and add padding
    return (
        <div className="home">
            <div className="landing">
                <h1>DEVEN AND BEN ARE GETTING MARRIED</h1>
                <button onClick={SetLevel}>up level</button>
            </div>

            <div className="home-content">
                    <InfoCard color={'#e9dfdd'} spaceText={"THE BEEES"} showWave={true} title={"HECK YEAH WE ARE!"} desc={"This site is a hub with information on all of our wedding related festivities. Check back frequently for updates as we get closer to the big day! "}/>
                    <InfoCard color={'#CDB084'} desc={"This site is a hub with information on all of our wedding related festivities. Check back frequently for updates as we get closer to the big day! "}/>
                    {level >= 1 && (<InfoCard color={'#3d472f'} title={"Engagement Party!"} desc={"its gonna be like a dragon or somethins"}/>)}
            </div>
        </div>
    )
}

export default Home;