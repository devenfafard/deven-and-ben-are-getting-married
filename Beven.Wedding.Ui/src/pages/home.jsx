import React from "react";

import './home.css';
import InfoCard from "../components/infoCard.jsx";

const Home = ({partyInfo, setLoginPopup}) =>
{
    return (
        <div className="home">
            <div className="landing">
                <h1>Deven and Ben are getting married!</h1>
            </div>

            <div className="home-content">
                <InfoCard mirrorWave={true} infoData={{ color : "#e9dfdd", title : "Heck yeah we are!" , body : "This site is a hub with information on all of our wedding related festivities. Check back frequently for updates as we get closer to the big day!"}} />
                {partyInfo.defconLevel < 1 && <InfoCard infoData={{ color : "#3d472f", title : "Login to see more", body : "Click below to enter your passcode"}} content={<button className={"infoButton"} onClick={setLoginPopup(true)}>Login</button>}/>}
            </div>
        </div>
    )
}

// light green: #3d472f
export default Home;