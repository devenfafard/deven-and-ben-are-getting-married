import "./galleryPopUp.css";
import ImageButton from "./imageButton.jsx";
import React from "react";

const GalleryPopUp = ({showPopup, closePopup, image, currentIndex, maxIndex, arrowPrev, arrowNext}) =>
{
    if(!showPopup) {return null}
    return (
        <div className="galleryPopUp">
            <button className="closeButton" onClick={closePopup}/>
            <div className="arrow-left"><ImageButton image={"../src/assets/ui/Arrow-left.png"} onClick={arrowPrev}/></div>
            <div className="imageContainer">
                <div className={"closeGallery"}><ImageButton image={"../src/assets/ui/Close-button.png"} onClick={closePopup}/></div>
                <img className="gallery-image" src={image} alt="image not found"/>
                <h2>{currentIndex+1}/{maxIndex}</h2>
            </div>
            <div className="arrow-right"><ImageButton image={"../src/assets/ui/Arrow-right.png"} onClick={arrowNext}/></div>
        </div>
    )
}

export default GalleryPopUp;