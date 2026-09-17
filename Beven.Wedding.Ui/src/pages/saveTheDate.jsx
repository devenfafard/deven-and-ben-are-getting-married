import React from "react";
import './saveTheDate.css';
import Wave from '../components/wave.jsx';
import InfoCard from "../components/infoCard.jsx";

const SaveTheDate = () =>
{
    return (
        <div className="saveTheDate">
            <div className="saveTheDate-landing">
                <div className="saveTheDate-top">
                    <h3>February 18th, 2028</h3>
                </div>
                <div className="saveTheDate-middle">
                    <h4>⟡</h4> <h1>Save the Date</h1> <h4>⟡</h4>
                </div>

                <div className="saveTheDate-bottom">
                    <h3>Indio, CA</h3>
                </div>
            </div>

            <div className="saveTheDate-content-section">
                <InfoCard mirrorWave={true} infoData={{ color : "#e9dfdd", title : "You've got plans!" , body : "Mark your calendars and get ready to party! More details and official RSVPs to follow."}} />
            </div>

            <div className="saveTheDate-locationContainer">
                <Wave/>
                <div className="saveTheDate-locationPanel">
                    <h2>Location</h2>
                    <h3>The Zenda Estate</h3>
                    <h3>82620 Zenda Drive</h3>
                    <h3>Indio, CA 92201</h3>
                </div>
            </div>
            <div className="saveTheDate-faqContainer">
                <Wave isMirror={true}/>
                <div className="saveTheDate-faqPanel">
                    <h2>Location</h2>
                    <h3>The Zenda Estate</h3>
                    <h3>82620 Zenda Drive</h3>
                    <h3>Indio, CA 92201</h3>
                </div>
            </div>
        </div>
    )
}

export default SaveTheDate;