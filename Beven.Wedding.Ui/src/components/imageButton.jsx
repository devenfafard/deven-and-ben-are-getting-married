import "./imageButton.css"

const ImageButton = ({image, button}) =>
{
    return (
        <button className="imageButton" onClick={button}>
            <img src={image} alt="image not loading"/>
        </button>
    )
}

export default ImageButton;