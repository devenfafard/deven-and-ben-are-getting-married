import React from "react";

import './gallery.css';
import Wave from '../components/wave.jsx';
import ImageButton from "../components/imageButton.jsx";

const Gallery = () =>
{
    return (
        <div className="gallery">
            <div className="gallery-top">
                <h1>Gallery</h1>
            </div>

            <div className="gallery-wall">
                <Wave isMirror={true}/>

                <div className="gallery-container">
                    <ImageButton button={null} image="src/assets/Balerion.jpg"/>
                    <ImageButton button={null} image="src/assets/Balerion.jpg"/>
                    <ImageButton button={null} image="src/assets/Balerion.jpg"/>
                    <ImageButton button={null} image="src/assets/Balerion.jpg"/>
                    <ImageButton button={null} image="src/assets/Balerion.jpg"/>
                    <ImageButton button={null} image="src/assets/Balerion.jpg"/>
                    <ImageButton button={null} image="src/assets/Balerion.jpg"/>
                </div>
            </div>
        </div>
    )
}

export default Gallery;