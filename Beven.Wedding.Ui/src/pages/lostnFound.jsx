import React from "react";

import './lostnFound.css';
import InfoCard from "../components/infoCard.jsx";

const LostnFound = () =>
{

    return (
        <div className="lostnFound">
            <div className={"lostBackground"}>
                <h1>Lost?</h1>
                <h2>You're not supposed to be here!</h2>

                <img src={"/src/assets/Balerion.jpg"}/>
            </div>
        </div>
    )
}

export default LostnFound;