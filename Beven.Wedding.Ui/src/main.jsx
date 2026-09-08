import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';

import Header from "./components/header.jsx";
import Footer from './components/footer.jsx';

import Home from "./pages/home.jsx";
import Gallery from "./pages/gallery.jsx";
import SaveTheDate from "./pages/saveTheDate.jsx";
import LoginPopUp from "./components/loginPopUp.jsx";

const Main = () =>
{
    const [partyInfo, setPartyInfo] = useState({
        firstName: "",
        lastName: "",
        defconLevel: 0,
    });
    function SetPartyData(data)
    {
        setPartyInfo({
            firstName: data["FirstName"],
            lastName: data["LastName"],
            defconLevel: data["DefconLevel"],
        });
        console.log("Party info set");
    }
    async function onSubmit(code)
    {
        const req = new Request(
            "https://beven-wedding-fx-fsghcmcrgse2deby.westus2-01.azurewebsites.net/api/defcon",
            {
                    method: "POST",
                    "Content-Type": "application/json",
                    accept: "application/json",
                    body: JSON.stringify({Data: code}),
                }
        );

        try
        {
            await fetch(req).then(response =>
            {
                if(response.ok)
                {
                    return response.json().then(data =>
                    {
                        if(data["Value"] === null || data["Value"]["Data"]["Result"].length < 1)
                        {
                            console.log(data["Value"]["Data"]["Result"]);
                            setLoginError(true);
                        }
                        else
                        {
                            console.log("Data fetched successfully!");
                            SetPartyData(data["Value"]["Data"]["Result"][0]);
                            setLoginPopup(false);
                        }
                    });
                }
                else
                {
                    throw new Error(response.statusText);
                }
            });
        }
        catch(e)
        {
            console.log("Error fetching data: " + e)
        }
    }


    const [showLoginPopup, setLoginPopup] = useState(false);
    const [showLoginError, setLoginError] = useState(false);
    function SetLoginPopup(val)
    {
        setLoginPopup(val);

        if(!val)
        {
            setLoginError(false);
        }
    }

    return(
        <BrowserRouter>
            <LoginPopUp showPopup={showLoginPopup} setPopup={SetLoginPopup} onSubmit={onSubmit} showErr={showLoginError} />
            <Header partyInfo={partyInfo} setLoginPopup={() => SetLoginPopup} />
            <Routes>
                <Route path="/" element={<Home partyInfo={partyInfo} setLoginPopup={() => SetLoginPopup} />}/>
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/save-the-date" element={partyInfo.defconLevel > 0 && <SaveTheDate/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}
export default Main;

createRoot(document.getElementById('root')).render(<Main/>);
