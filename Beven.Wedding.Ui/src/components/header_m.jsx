import {React, useState} from "react";
import {useNavigate} from "react-router-dom";

import './header_m.css';

import DBLogo from '../assets/DB_Logo.png';
import menu from '../assets/menu.png';
import ImageButton from "./imageButton.jsx";

const Header_M = ({partyInfo = { safeDisplayName: "", defconLevel: 0}, setLoginPopup}) =>
{
    const [showHeader, setShowHeader] = useState(false);
    const navigate = useNavigate();

    let headerClassName;
    if(showHeader)
    {
        headerClassName = "header_m_background"
    }
    else
    {
        headerClassName = "header_m_closed"
    }

    return (
        <div className={"header_m"}>
            <div className={"header_m_toggle"}>
                <ImageButton image={menu} onClick={ ()=>setShowHeader(true) }/>
            </div>

            <div className={headerClassName} onClick={ ()=>setShowHeader(false) }>
                <div className={"header_m_menu"}>
                    <ImageButton image={DBLogo} onClick={() => { navigate("/")}}/>

                    <button onClick={() => { navigate("/")}}>Home</button>
                    <button onClick={() => { navigate("/gallery")}}>Gallery</button>
                    {partyInfo.defconLevel > 0 && <button onClick={() => { navigate("/save-the-date")}}>Save the Date</button>}
                    <button onClick={() => { navigate("/faq")}}>FAQ</button>

                    <h2>----</h2>
                    {partyInfo.defconLevel < 1 && <button className="login-button" onClick={setLoginPopup(true)}>Login</button>}
                    {partyInfo.defconLevel > 0 && <p>{partyInfo.safeDisplayName}</p>}
                </div>
            </div>
        </div>
    )
}

export default Header_M;