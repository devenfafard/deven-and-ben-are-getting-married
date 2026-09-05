import "./loginPopUp.css";
import React from "react";

const LoginPopUp = ({showPopup, closePopup}) =>
{
    if(!showPopup) {return null}
    return (
        <div className="loginPopUp">
            <button className="closeButton" onClick={closePopup}/>
            <div className="loginContainer">
                <h2>Enter passcode</h2>
                <input id="code" type="text"/>
                <button type={"submit"}>Submit</button>
            </div>
        </div>
    )
}

export default LoginPopUp;