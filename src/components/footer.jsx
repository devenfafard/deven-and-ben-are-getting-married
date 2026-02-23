import React from "react";

import './footer.css';
import Wave from './wave.jsx';

const Footer = () =>
{
    const d = new Date();
    let year = d.getFullYear();

    return (
        <div className="footer">
            <Wave/>
            <div className="footer-content">
                <p>Copyright © {year} Beven, All Right Reserved.</p>
            </div>

        </div>
    )
}

export default Footer;