import "./loginPopUp.css";
import React from "react";

const LoginPopUp = ({showPopup, closePopup}) =>
{
    if(!showPopup) {return null}
    return (
        <div className="loginPopUp">
            <button className="closeButton" onClick={closePopup}/>
            <div className="loginContainer">
                <label>
                    passcode: <input id="passcode" type="text"/>
                    <button type={"submit"}>Submit</button>
                </label>
            </div>
        </div>
    )
}

export default LoginPopUp;