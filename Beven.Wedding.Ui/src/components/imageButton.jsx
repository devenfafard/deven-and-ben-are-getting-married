import "./imageButton.css"

const ImageButton = ({image, onClick}) =>
{
    return (
        <button className="imageButton" onClick={onClick}>
            <img src={image} alt="image not loading"/>
        </button>
    )
}

export default ImageButton;