import { React, useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";

import './header.css';

const Header = ({partyLevel, onLogin}) =>
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

    function LoginInfo(level)
    {
        if(level > 0)
        {
            return null;
        }

        return(<button className="loginButton" onClick={onLogin}>Login</button>);
    }

    return (
        <div className={headerClassName}>
            <div className="header-left">
                <button className="header-button" onClick={() => { navigate("/")}}>
                    <img className="header-icon" src="src/assets/Balerion.jpg" alt={null}></img>
                </button>
            </div>

            <div className="header-right">
                {LoginInfo(partyLevel)}
                <h2>|</h2>
                <button onClick={() => { navigate("/")}}>Home</button>
                <button onClick={() => { navigate("/gallery")}}>Gallery</button>
                <button onClick={() => { navigate("/save-the-date")}}>Save the Date</button>
            </div>
        </div>
    )
}

export default Header;