import "./loginPopUp.css";
import React from "react";
import ImageButton from "./imageButton.jsx";

import CloseButton from "../assets/CloseButton.png";

const LoginPopUp = ({showPopup, setPopup, showErr, onSubmit, showLoader, showRecPopup}) =>
{
    const [code, setCode] = React.useState("");

    function OnInputChange(val)
    {
        const filteredCode = val.replace(/[^a-zA-Z]/, "").toLowerCase();
        setCode(filteredCode);
    }

    function ResetPopup()
    {
        setPopup(false);
        setCode("");
    }

    if(showPopup === false) {return null}
    return (
        <div className="loginPopUp">
            <button className="closeBackground" onClick={ResetPopup}/>
            {showLoader && <span className="loader"></span>}
            <div className="loginContainer">
                <div className={"closeLogin"}><ImageButton image={CloseButton} onClick={ResetPopup}/></div>
                {!showLoader && <div>
                    <div className="formContainer">
                        <h2>Welcome!</h2>
                        <h3>Enter your passcode below to login.</h3>
                        {showErr && <p className={"errorText"}>Invalid passcode, please try again.</p>}
                        <input id="code" type="text" maxLength={20} value={code}
                               onInput={event => OnInputChange(event.target.value)} autoFocus={true}/>
                        <button className={"submitButton"} onClick={async () => {
                            onSubmit(code)
                        }}>Submit
                        </button>
                    </div>
                    <p>Don't remember your passcode? <a href={null} onClick={() => showRecPopup(true)}>Click here!</a></p>
                </div>}
            </div>
        </div>
    )
}

export default LoginPopUp;