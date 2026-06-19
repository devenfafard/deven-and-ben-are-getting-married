import React from "react";

import './home.css';
import InfoCard from "../components/infoCard.jsx";
import SecurityLevel from "../Data/SecurityLevel.jsx";

const Home = () =>
{
//#CDB084
    // TODO - make text box component to pass to info card and add padding
    return (
        <div className="home">
            <div className="landing">
                <h1>DEVEN AND BEN ARE GETTING MARRIED</h1>
            </div>

            <div className="home-content">
                    <InfoCard showWave={true} mirrorWave={true} color={'#e9dfdd'} title={"HECK YEAH WE ARE!"} body={"This site is a hub with information on all of our wedding related festivities. Check back frequently for updates as we get closer to the big day! "}/>
                    <InfoCard showWave={true} color={'#CDB084'} body={"This site is a hub with information on all of our wedding related festivities. Check back frequently for updates as we get closer to the big day! "}/>
                    <InfoCard securityLevelNeeded={1} showWave={true} mirrorWave={true} color={'#3d472f'} title={"Engagement Party!"} body={"its gonna be like a dragon or somethins"}/>
            </div>
        </div>
    )
}

export default Home;