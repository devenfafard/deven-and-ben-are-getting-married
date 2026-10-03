import React, {useEffect} from "react";
import './saveTheDate.css';
import Wave from '../components/wave.jsx';
import InfoCard from "../components/infoCard.jsx";

const SaveTheDate = () =>
{
    useEffect(() => {
        window.scrollTo({top: 0 ,behavior: "instant"});
    }, [])
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
                <InfoCard  infoData={{title : "You've got plans!" , body : "Mark your calendars and get ready to party! More details and official RSVPs to follow."}} />
            </div>

            <div className="saveTheDate-locationContainer">
                <Wave isMirror={true}/>
                <div className="saveTheDate-locationPanel">
                    <h2>Location</h2>
                    <h3>The Zenda Estate</h3>
                    <h3>82620 Zenda Drive</h3>
                    <h3>Indio, CA 92201</h3>
                </div>

            </div>
            <div className="saveTheDate-faqContainer">
                <Wave/>
                <div className="saveTheDate-faqContainer-left">
                    <h2>Dress Code</h2>
                </div>
                <div className="saveTheDate-faqContainer-left">
                    <p>Come dance the night away with us wearing your best cocktail attire! Please note that our ceremony will take place on a grass lawn, so plan your shoe choice accordingly.</p>
                </div>
                <div className="saveTheDate-faqContainer-right">
                    <h2>Weather Considerations</h2>
                    <p>Our wedding will take place on the estate grounds, rain or shine! In the event of <a target="_blank" href="https://media1.tenor.com/m/xCk_nRiiingAAAAd/cant-control-the-weather-damn-jackie.gif">inclement weather</a>, we will notify you ahead of time.</p>
                </div>
                <div className="saveTheDate-faqContainer-left">
                    <h2>Accommodations</h2>
                    <p>While we haven't finalized every detail yet, please let us know if you have any allergies or require any accommodations as soon as possible. We'll work with our vendors to make sure you have what you need to be with us on our big day!</p>
                </div>
            </div>
        </div>
    )
}

export default SaveTheDate;