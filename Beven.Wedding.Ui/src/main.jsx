import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';

import GalleryPopUp from "./components/galleryPopUp.jsx";
import Header from "./components/header.jsx";
import Footer from './components/footer.jsx';

import Home from "./pages/home.jsx";
import Gallery from "./pages/gallery.jsx";

const Main = () =>
{
    const [showGalleryPopUp, setShowGalleryPopUp] = useState(true)
    const [galleryImage, setImage] = useState("");

    const allImages = import.meta.glob('../assets/gallery/*.jpg');

    for (const img in allImages){
        allImages[img]().then((smth) => {
            console.log(img, smth)
        })
    }

    return(
        <BrowserRouter>
            <GalleryPopUp showPopup={showGalleryPopUp} closePopup={() => setShowGalleryPopUp(false)} image={galleryImage}/>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default Main;

createRoot(document.getElementById('root')).render(<Main/>);
