import React from "react";

import './footer.css';
import Wave from './wave.jsx';

const Footer = () =>
{
    return (
        <div className="footer">
            <Wave/>
            <div className="footer-content">
                <p>foot</p>
            </div>

        </div>
    )
}

export default Footer;