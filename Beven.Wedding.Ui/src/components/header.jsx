import { React, useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";

import './header.css';

import DBLogo from '../assets/DB_Logo.png';

const Header = ({partyInfo = { safeDisplayName: "", defconLevel: 0}, setLoginPopup}) =>
{
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(()=>{
        const handleScroll = ()=>
        {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollY = window.scrollY;

            const scrollPercent = (scrollY / (documentHeight - windowHeight))*100

            setScrollPercentage(scrollPercent)
        }

        window.addEventListener("scroll", handleScroll);

        return()=>{
            window.removeEventListener("scroll", handleScroll)
        }
    },[])

    let headerClassName;
    if (scrollPercentage > 30)
    {
         headerClassName = "header-floating";
    }
    else
    {
        headerClassName = "header";
    }

    const navigate = useNavigate();

    return (
        <div className={headerClassName}>
            <div className="header-left">
                <button className="header-icon-button" onClick={() => { navigate("/")}}>
                    <img src={DBLogo} alt={"D ❤ B"}></img>
                </button>
            </div>

            <div className="header-right">
                {partyInfo.defconLevel < 1 && <button className="login-button" onClick={setLoginPopup(true)}>Login</button>}
                {partyInfo.defconLevel > 0 && <p>{partyInfo.safeDisplayName}</p>}
                <h2> | </h2>
                <button onClick={() => { navigate("/")}}>Home</button>
                <button onClick={() => { navigate("/gallery")}}>Gallery</button>
                {partyInfo.defconLevel > 0 && <button onClick={() => { navigate("/save-the-date")}}>Save the Date</button>}
                <button onClick={() => { navigate("/faq")}}>FAQ</button>
            </div>
        </div>
    )
}

export default Header;