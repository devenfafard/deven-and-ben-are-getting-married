import "./loginPopUp.css";
import React from "react";
import ImageButton from "./imageButton.jsx";

const LoginPopUp = ({showPopup, setPopup, showErr, onSubmit, showLoader}) =>
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

    if(!showPopup) {return null}
    return (
        <div className="loginPopUp">
            <button className="closeBackground" onClick={ResetPopup}/>
            {showLoader && <span className="loader"></span>}
            <div className="loginContainer">
                <div className={"closeLogin"}><ImageButton image={"./assets/ui/Close-button.png"}
                                                           onClick={ResetPopup}/></div>
                {!showLoader && <div>
                    <h2>Enter Your Passcode:</h2>
                    {showErr && <p className={"errorText"}>Invalid passcode, please try again.</p>}
                    <input id="code" type="text" maxLength={20} value={code}
                           onInput={event => OnInputChange(event.target.value)} autoFocus={true}/>
                    <button className={"submitButton"} onClick={async () => {
                        onSubmit(code)
                    }}>Submit
                    </button>
                    <h4>Don't remember your passcode? Send us a text or email.</h4>
                </div>}
            </div>
        </div>
    )
}

export default LoginPopUp;