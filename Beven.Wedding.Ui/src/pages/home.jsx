import React from "react";

import './home.css';
import InfoCard from "../components/infoCard.jsx";

const Home = () =>
{
    return (
        <div className="home">
            <div className="landing">
                <h1>Deven and Ben are getting married!</h1>
            </div>

            <div className="home-content">
                    <InfoCard showWave={true} mirrorWave={true} color={'#e9dfdd'} title={"Heck yeah we are!"} body={"This site is a hub with information on all of our wedding related festivities. Check back frequently for updates as we get closer to the big day! "}/>
                    <InfoCard securityLevelNeeded={1} showWave={false} mirrorWave={false} color={'#3d472f'} title={"Engagement Party!"} body={"its gonna be like a dragon or somethins"}/>
            </div>
        </div>
    )
}

// light green: #3d472f
export default Home;