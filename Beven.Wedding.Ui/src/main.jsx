import React from 'react';
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
    return(
        <BrowserRouter>
            <Header/>
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
