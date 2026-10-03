import React, {useEffect} from "react";
import './faq.css';
import Wave from '../components/wave.jsx';
import NoImage from "../assets/no.png";

const Faq = ({partyInfo}) =>
{
    useEffect(() => {
        window.scrollTo({top: 0 ,behavior: "instant"});
    }, [])
    return (
        <div className="faq">
            <div className="faq-top">
                <div className="faq-line">
                    <h1>Frequently Asked Questions</h1>
                    <h2>Don't see your question here? Send us an email!</h2>
                </div>
            </div>

            <div className="faq-content-section">
                <Wave isMirror={true}/>
                <div className="faq-content-section-group">
                    <div className="faq-content-section-question">Where do I get a passcode?</div>
                    <div className="faq-content-section-answer">We have sent your personalized passcode to you via text or email.</div>

                    <div className="faq-content-section-question">What do I do if I forgot my passcode?</div>
                    <div className="faq-content-section-answer">Send us a text or email and we can resend your passcode.</div>

                    <div className="faq-content-section-question">Can I change my passcode?</div>
                    <div className="faq-content-section-answer">
                        <img className="no" src={NoImage} alt="No."/>
                    </div>
                </div>

                {partyInfo.defconLevel > 0 &&
                    <div className="faq-content-section-group">
                    <div className="faq-content-section-question">Are you guys seriously bring your pets to your wedding?</div>
                    <div className="faq-content-section-answer">Yes! We plan on having all of our pets with us on the big day.</div>

                    <div className="faq-content-section-question">Can I bring my pets to your wedding?</div>
                    <div className="faq-content-section-answer">Due to restrictions on the property, we are not allowed to bring any other animals to the estate.</div>
                </div>}
            </div>
        </div>
    )
}

export default Faq;