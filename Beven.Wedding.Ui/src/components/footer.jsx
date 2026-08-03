import React from "react";

import './footer.css';
import Wave from './wave.jsx';

const Footer = () =>
{
    const d = new Date();
    let year = d.getFullYear();
    let yearLink = "https://getfullyear.com"

    return (
        <div className="footer">
            <Wave height={45}/>
            <div className="footer-content">
                <p>
                    Made with ❤ by Ben & Deven
                    <br/>
                    © <a href={yearLink}>{year}</a>
                </p>
            </div>
        </div>
    )
}

export default Footer;