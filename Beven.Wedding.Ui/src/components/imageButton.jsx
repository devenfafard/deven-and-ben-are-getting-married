import "./imageButton.css"
import React from "react";

const ImageButton = ({image, onClick}) =>
{
    const [showLoader, setShowLoader] = React.useState(true);

    return (
        <button className="imageButton" onClick={onClick}>
            <img src={image} alt="" onLoad={()=>setShowLoader(false)}/>
            {showLoader && <span className="loader2"></span>}
        </button>
    )
}

export default ImageButton;