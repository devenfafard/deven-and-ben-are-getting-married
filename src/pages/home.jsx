import React from "react";

import './home.css';
import Wave from '../components/wave.jsx';

const Home = () =>
{
    return (
        <div className="home">
            <div className="landing">
                <h1>Deven and Ben are getting married!</h1>
            </div>

            <div className="home-background">
                <Wave/>
                <div className="home-content">
                    <h2>Deven and Ben reaaaaallly love each other!</h2>
                    <p>Log in to see if you are invited!</p>
                </div>
            </div>
        </div>
    )
}

export default Home;