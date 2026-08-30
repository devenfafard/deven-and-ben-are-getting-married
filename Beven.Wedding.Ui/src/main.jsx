import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';

import Header from "./components/header.jsx";
import Footer from './components/footer.jsx';

import Home from "./pages/home.jsx";
import Gallery from "./pages/gallery.jsx";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
)
