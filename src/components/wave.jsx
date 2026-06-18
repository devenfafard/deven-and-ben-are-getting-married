import React from "react";

import './wave.css'

const Wave = ({isMirror = false}) =>
{
    let wave = "wave";
    if(isMirror)
    {
        wave = "waveMirror";
    }

    return (
        <svg className={wave} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
             y="0px" viewBox="0 0 1400 100" preserveAspectRatio="none">
            <path d="M0,100c0,0,419-178,693-49.5S1400,0,1400,0v100H0z"></path>
        </svg>
    )
}

export default Wave;