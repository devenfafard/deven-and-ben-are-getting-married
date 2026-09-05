import { React, useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";

import './header.css';

const Header = ({partyInfo = { firstName: "", lastName: "", defconLevel: 0}, onLogin}) =>
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
            // console.log(scrollPercent)
        }

        window.addEventListener("scroll", handleScroll);

        return()=>{
            window.removeEventListener("scroll", handleScroll)
        }
    },[])

    var headerClassName = "";
    if (scrollPercentage > 30)
    {
         headerClassName = " header-floating";
    }
    else
    {
        headerClassName = " header";
    }

    const navigate = useNavigate();

    return (
        <div className={headerClassName}>
            <div className="header-left">
                <button className="header-button" onClick={() => { navigate("/")}}>
                    <img className="header-icon" src="src/assets/Balerion.jpg" alt={null}></img>
                </button>
            </div>

            <div className="header-right">
                {partyInfo.defconLevel < 1 && <button className="loginButton" onClick={onLogin}>Login</button>}
                {partyInfo.defconLevel > 0 && <p>{partyInfo.lastName}</p>}
                <h2>|</h2>
                <button onClick={() => { navigate("/")}}>Home</button>
                <button onClick={() => { navigate("/gallery")}}>Gallery</button>
                {partyInfo.defconLevel > 0 && <button onClick={() => { navigate("/save-the-date")}}>Save the Date</button>}
            </div>
        </div>
    )
}

export default Header;