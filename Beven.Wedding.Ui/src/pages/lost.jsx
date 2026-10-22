import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Elmo from "../assets/elmo.png";
import './lost.css';
import InfoCard from "../components/infoCard.jsx";

const Lost = ({setLoginPopup, showLogin}) =>
{
    useEffect(() => {
        window.scrollTo({top: 0 ,behavior: "instant"});
    }, [])

    const navigate = useNavigate();

    return (
        <div className="lost">
            <h1>Lost?</h1>
            <img src={Elmo}/>
            {showLogin ? <InfoCard infoData={{title: "You're not supposed to be here!", color : "var(--tan)"}} content={<button className={"info-button"} onClick={setLoginPopup(true)}>SIGN IN FIRST, BRO</button>}></InfoCard>
                : <InfoCard infoData={{title: "You're not allowed to invent pages that don't exist!", color : "var(--tan)"}} content={<button className={"info-button"} onClick={() => {navigate("/")}}> ← GO HOME, G.I.</button>}></InfoCard>}
        </div>
    )
}

export default Lost;