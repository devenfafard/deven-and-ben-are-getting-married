import React, {useEffect} from "react";

import './lost.css';
import InfoCard from "../components/infoCard.jsx";

const Lost = ({setLoginPopup}) =>
{
    useEffect(() => {
        window.scrollTo({top: 0 ,behavior: "instant"});
    }, [])
    return (
        <div className="lost">
            <h1>Lost?</h1>
            <InfoCard mirrorWave={true} infoData={{ title: "You're not supposed to be here!", color : "var(--tan)"}} content={<button className={"info-button"} onClick={setLoginPopup(true)}>SIGN IN TO SEE MORE</button>}/>
        </div>
    )
}

export default Lost;