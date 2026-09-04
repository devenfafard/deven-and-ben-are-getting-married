import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';

import Header from "./components/header.jsx";
import Footer from './components/footer.jsx';

import Home from "./pages/home.jsx";
import Gallery from "./pages/gallery.jsx";
import SaveTheDate from "./pages/saveTheDate.jsx";

const Main = () =>
{
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch("https://beven-wedding-fx-fsghcmcrgse2deby.westus2-01.azurewebsites.net/api/defcon",
    //             {
    //                 method: "POST",
    //                 mode: "no-cors",
    //                 headers:
    //                     {
    //                         'Content-Type': "application/json",
    //                         Accept: "application/json",
    //                     },
    //                 body: JSON.stringify({Data:"am"})
    //             }).then()
    //             return await response.text();
    //     }
    //     const xxx = fetchData();
    //     console.log(xxx);
    // }, []);

    async function eatmyballsAsync()
    {
        const fuckingshit = new Request(
            "https://beven-wedding-fx-fsghcmcrgse2deby.westus2-01.azurewebsites.net/api/defcon",
            {
                    method: "POST",
                    "Content-Type": "application/json",
                    body: JSON.stringify({Data:"am"}),
                }
            )

        try
        {
            // DA JUICE
            await fetch(fuckingshit)
                .then(response =>
                {
                    if(response.ok)
                    {
                        return response.json().then((data)=> data)
                    }
                    else
                    {
                        response.json().then(response => {throw new Error(response.error)})
                    }
                });
            // END DA JUICE
        }
        catch(e)
        {
            console.log("this shit fucking syucs " + e)
        }

    }
    useEffect(() =>
        {
            const balls = async () => await eatmyballsAsync()


            // const fuckyou = await fetch("https://beven-wedding-fx-fsghcmcrgse2deby.westus2-01.azurewebsites.net/api/defcon",
            //     {
            //         method: "POST",
            //         mode: "no-cors",
            //         headers:
            //             {
            //                 "Content-Type": "application/json",
            //                 Accept: "application/json",
            //             },
            //         body: JSON.stringify({Data:"am"})
            //     })
                // .then(response => response.json()
                //     .then(data =>
                //         (
                //             {
                //                 data: data,
                //                 status: response.status,
                //             }
                //         )
                //     )
                //     .then(result => {console.log(result)}))
        }, [])

    const [partyLevel, setPartyLevel] = useState(0);

    return(
        <BrowserRouter>
            <Header partyLevel={partyLevel} onLogin={() => setPartyLevel(1)} />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/save-the-date" element={<SaveTheDate/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}
export default Main;

createRoot(document.getElementById('root')).render(<Main/>);
