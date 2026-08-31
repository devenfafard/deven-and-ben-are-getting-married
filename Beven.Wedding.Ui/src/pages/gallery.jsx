import React, { useState } from "react";

import './gallery.css';
import Wave from '../components/wave.jsx';
import ImageButton from "../components/imageButton.jsx";
import GalleryPopUp from "../components/galleryPopUp.jsx";

const Gallery = () =>
{
    const [showGalleryPopUp, setShowGalleryPopUp] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);

    const modules = import.meta.glob('../assets/gallery/*.{jpg,jpeg,png,webp}', { eager: true });
    const images = Object.values(modules).map(module => module.default);

    function SetImageIndex(index)
    {
        if (index < 0)
        {
            setImageIndex(0);
            return;
        }

        if(index > images.length-1)
        {
            setImageIndex(images.length - 1);
            return;
        }

        setImageIndex(index);
    }

    function openGalleryPopup(index)
    {
        SetImageIndex(index);
        setShowGalleryPopUp(true);
    }

    return (
        <div className="gallery">
            <GalleryPopUp showPopup={showGalleryPopUp} closePopup={() => setShowGalleryPopUp(false)} image={images[imageIndex]}
                          currentIndex={imageIndex} maxIndex={images.length} arrowPrev={() => SetImageIndex(imageIndex-1)} arrowNext={() => SetImageIndex(imageIndex+1)} />
            <div className="gallery-top">
                <h1>Gallery</h1>
            </div>

            <div className="gallery-wall">
                <Wave isMirror={true}/>

                <div className="gallery-container">
                    {images.map((image, index) =>
                        (
                            <ImageButton onClick={() => openGalleryPopup(index)} image={image}/>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default Gallery;