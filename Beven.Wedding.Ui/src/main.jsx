import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';

import Header from "./components/header.jsx";
import Footer from './components/footer.jsx';

import Home from "./pages/home.jsx";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home  />}/>

        </Routes>
        <Footer/>
    </BrowserRouter>
)
