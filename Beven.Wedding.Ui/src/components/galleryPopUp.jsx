import "./galleryPopUp.css";
import ImageButton from "./imageButton.jsx";

const GalleryPopUp = ({showPopup, closePopup, image, currentIndex, maxIndex, arrowPrev, arrowNext}) =>
{
    if(!showPopup) {return null}
    return (
        <div className="galleryPopUp">
            <button className="closeButton" onClick={closePopup}/>
            <div className="imageContainer">
                <div className="arrow-left"><ImageButton image={"../src/assets/ui/Arrow-left.png"} onClick={arrowPrev}/></div>
                <img className="gallery-image" src={image} alt="image not found"/>
                <h2>{currentIndex+1}/{maxIndex}</h2>
                <div className="arrow-right"><ImageButton image={"../src/assets/ui/Arrow-right.png"} onClick={arrowNext}/></div>
            </div>
        </div>
    )
}

export default GalleryPopUp;