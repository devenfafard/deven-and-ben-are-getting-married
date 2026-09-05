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
        setLoginPopUp(false);
        setPartyInfo({
            firstName: data["FirstName"],
            lastName: data["LastName"],
            defconLevel: data["DefconLevel"],
        });
        console.log("Party info set");
    }
    async function SetCode(event)
    {
        event.preventDefault();
        const val = event.currentTarget.elements.code.value.toString();
        setLoginPopUp(false);
        await onSubmit(val);
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
                        console.log("Data fetched successfully!");
                        SetPartyData(data["Value"]["Data"]["Result"][0]);
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

    const [showLoginPopUp, setLoginPopUp] = useState(false);

    return(
        <BrowserRouter>
            <form id="code" onSubmit={SetCode}>
                <LoginPopUp showPopup={showLoginPopUp} closePopup={() => setLoginPopUp(false)} />
            </form>
            <Header partyInfo={partyInfo} onLogin={() => setLoginPopUp(true)} />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/save-the-date" element={partyInfo.defconLevel > 0 && <SaveTheDate/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}
export default Main;

createRoot(document.getElementById('root')).render(<Main/>);
