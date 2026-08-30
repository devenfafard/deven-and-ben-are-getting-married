import "./galleryPopUp.css";

const GalleryPopUp = ({showPopup, closePopup, image}) =>
{
    if(!showPopup) {return null}
    return (
        <div className="galleryPopUp" onClick={() => closePopup()}>
            <div className="imageContainer">
                <img src={image} alt="image not found"/>
            </div>
        </div>
    )
}

export default GalleryPopUp;