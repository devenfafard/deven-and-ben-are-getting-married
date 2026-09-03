import React from "react";
import './saveTheDate.css';
import Wave from '../components/wave.jsx';
import InfoCard from "../components/infoCard.jsx";
import ImageButton from "../components/imageButton.jsx";

const SaveTheDate = () =>
{
    return (
        <div className="saveTheDate">
            <div className="saveTheDate-top">
                <h3>February 18th, 2028</h3>
            </div>
            <div className="saveTheDate-middle">
                <h4>⟡</h4> <h1>Save the Date</h1> <h4>⟡</h4>
            </div>

            <div className="saveTheDate-bottom">
                <h3>Indio, CA</h3>
            </div>

            <div className="saveTheDate-content-section">
                <InfoCard showWave={true} color={'#e9dfdd'} title={"You've got plans!"} body={"Mark your calendars and get ready to party! More details and official RSVPs to follow."}/>
            </div>

            <div className="saveTheDate-container">
                <Wave/>
                <div className="saveTheDate-locationPanel">
                    <p><h2>Location</h2></p>
                    <p><h5>The Zenda Estate</h5></p>

                </div>
            </div>
        </div>
    )
}

export default SaveTheDate;