import React from "react";

import './home.css';
import InfoCard from "../components/infoCard.jsx";
import {useNavigate} from "react-router-dom";

import RingImage from "../assets/rings.png";

const Home = ({partyInfo, setLoginPopup}) =>
{
    const navigate = useNavigate();

    return (
        <div className="home" style={{backgroundImage: "url(" + RingImage + ")"}}>
            <div className="landing">
                <h1>Deven and Ben are getting married!</h1>
            </div>

            <div className="home-content">
                <InfoCard infoData={{ color : "var(--pure-white)", title : "Heck yeah we are!" , body : "This site is a hub with information on all of our wedding related festivities. Check back frequently for updates as we get closer to the big day!"}} />
                {partyInfo.defconLevel < 1 && <InfoCard mirrorWave={true} infoData={{ title: "Want details?", color : "var(--tan)"}} content={<button className={"info-button"} onClick={setLoginPopup(true)}>SIGN IN TO SEE MORE</button>}/>}
                {partyInfo.defconLevel > 0 && <InfoCard mirrorWave={true} infoData={{color : "var(--tan)", title: "Hi, "+ partyInfo.safeDisplayName + "!", body: "Explore our latest updates below."}} content={<button className={"page-button"} onClick={() => { navigate("/save-the-date")}}>Save the Date</button>}/>}
                <InfoCard infoData={{ color : "var(--light-green)", title : "Still have questions?"}} content={<button className={"empty-button"} onClick={() => { navigate("/faq")}}>FREQUENTLY ASKED QUESTIONS</button>}/>
            </div>
        </div>
    )
}

export default Home;