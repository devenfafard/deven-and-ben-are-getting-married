import React from "react";

import './gallery.css';
import Wave from '../components/wave.jsx';
import ImageButton from "../components/imageButton.jsx";

const Gallery = ({openPopUp}) =>
{
    return (
        <div className="gallery">
            <div className="gallery-top">
                <h1>Gallery</h1>
            </div>

            <div className="gallery-wall">
                <Wave isMirror={true}/>

                <div className="gallery-container">
                    <ImageButton onClick={openPopUp} image="src/assets/gallery/IMG_0553_20250830_101618.jpg"/>
                </div>
            </div>
        </div>
    )
}

export default Gallery;