import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';

import Header from "./components/header.jsx";
import Header_M from "./components/header_m.jsx";
import Footer from './components/footer.jsx';

import Home from "./pages/home.jsx";
import Gallery from "./pages/gallery.jsx";
import SaveTheDate from "./pages/saveTheDate.jsx";
import Faq from "./pages/faq.jsx";
import Lost from "./pages/lost.jsx";
import LoginPopUp from "./components/loginPopUp.jsx";
import RecoveryPopup from "./components/recoveryPopup.jsx";

const Main = () =>
{
    const [partyInfo, setPartyInfo] = useState({
        defconLevel: 0,
        safeDisplayName: ""
    });

    function SetPartyData(data)
    {
        console.log(data.map(p => p.FirstName).join(" & "))

        setPartyInfo({
            safeDisplayName: data.map(p => p.FirstName).join(" & "),
            defconLevel: data[0]["DefconLevel"], //TODO - update shape of backup
        });
    }
    async function onSubmitPasscode(code)
    {
        setShowLoginLoader(true);

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
                            setShowLoginLoader(false);
                        }
                        else
                        {
                            console.log("Data fetched successfully!");

                            SetPartyData(data["Value"]["Data"]["Result"]);
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

    async function OnSubmitRecovery(name)
    {
        setRecLoader(true);
        setShowRecForm(false);

        const req = new Request(
            "https://beven-wedding-fx-fsghcmcrgse2deby.westus2-01.azurewebsites.net/api/passcode",
            {
                method: "POST",
                "Content-Type": "application/json",
                accept: "application/json",
                body: JSON.stringify({FirstName: name.firstName, LastName: name.lastName}),
            }
        );

        try
        {
            await fetch(req).then(response =>
            {
                setRecLoader(false);

                if(response.ok)
                {
                    setShowRecSuccess(true);
                    setShowRecError(false);
                }
                else
                {
                    setShowRecSuccess(false);
                    setShowRecError(true);

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
    const [showLoginLoader, setShowLoginLoader] = useState(false);

    const [showRecPopup, setRecPopup] = useState(false);
    const [showRecLoader, setRecLoader] = useState(false);

    const [showRecForm, setShowRecForm] = useState(true);
    const [showRecSuccess, setShowRecSuccess] = useState(false);
    const [showRecError, setShowRecError] = useState(false);


    function SetLoginPopup(val)
    {
        setLoginPopup(val);

        if(val === false)
        {
            setLoginError(false);
            setShowLoginLoader(false);
        }
    }

    function SetRecPopup(val)
    {
        setRecPopup(val);

        if(val === false)
        {
            setShowRecForm(true);
            setRecLoader(false);
            setShowRecError(false);
            setShowRecSuccess(false);
        }
    }

    let useMobileHeader = false;
    if(screen.width < 768)
    {
        useMobileHeader = true;
    }

    return(
        <BrowserRouter>
            <LoginPopUp showPopup={showLoginPopup} setPopup={SetLoginPopup} onSubmit={onSubmitPasscode} showErr={showLoginError} showLoader={showLoginLoader} showRecPopup={setRecPopup}/>
            <RecoveryPopup showPopup={showRecPopup} setPopup={SetRecPopup} onSubmit={OnSubmitRecovery} showLoader={showRecLoader} showForm={showRecForm} showSuccess={showRecSuccess} showError={showRecError}/>
            {useMobileHeader ? <Header_M partyInfo={partyInfo} setLoginPopup={() => SetLoginPopup} /> : <Header partyInfo={partyInfo} setLoginPopup={() => SetLoginPopup} /> }
            <Routes>
                <Route path="/" element={<Home partyInfo={partyInfo} setLoginPopup={() => SetLoginPopup} />}/>
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/save-the-date" element={partyInfo.defconLevel > 0 ? <SaveTheDate/> : <Lost setLoginPopup={() => SetLoginPopup} showLogin={true}/>}/>
                <Route path="/faq" element={<Faq partyInfo={partyInfo} setRecPopup={SetRecPopup}/>}/>
                <Route path="*" element={<Lost setLoginPopup={()=>{}} showLogin={false}/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}
export default Main;

createRoot(document.getElementById('root')).render(<Main/>);
