import "./loginPopUp.css";
import React from "react";
import ImageButton from "./imageButton.jsx";

const LoginPopUp = ({showPopup, setPopup, showErr, onSubmit}) =>
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
            <div className="loginContainer">
                <div className={"closeLogin"}><ImageButton image={"../src/assets/ui/Close-button.png"} onClick={ResetPopup}/></div>
                <h2>Enter passcode</h2>
                <p>Enter letters only.</p>
                {showErr && <p className={"errorText"}>Invalid passcode. Try again</p>}
                <input id="code" type="text" maxLength={20} value={code} onInput={event => OnInputChange(event.target.value)} autoFocus={true}/>
                <button className={"submitButton"} onClick={async () => {onSubmit(code)}}>Submit</button>
            </div>
        </div>
    )
}

export default LoginPopUp;