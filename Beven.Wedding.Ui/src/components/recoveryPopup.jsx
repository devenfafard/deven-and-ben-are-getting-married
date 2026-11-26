import './recoveryPopup.css';
import React, {useState} from "react";
import ImageButton from "./imageButton.jsx";
import CloseButton from "../assets/CloseButton.png";

const RecoveryPopup = ({showPopup, setPopup, showLoader, showForm, showSuccess, showError, onSubmit}) =>
{
    const [name, setName] = useState(
        {
            firstName: "Beven",
            lastName: "Beven",
        });

    function OnFirstInputChange(val)
    {
        setName({firstName: val, lastName: name.lastName});
    }

    function OnLastInputChange(val)
    {
        setName({firstName: name.firstName, lastName: val});
    }

    function ResetPopup()
    {
        setPopup(false);
        showSuccess(false);
        showError(false);
    }

    if(showPopup === false) {return null}
    return (
        <div className="recoveryPopup">
            <button className="closeBackground" onClick={ResetPopup}/>
            {showLoader && <span className="loader"></span>}
            <div className="popupContainer">
                <div className={"closeLogin"}><ImageButton image={CloseButton} onClick={ResetPopup}/></div>
                <h3>Forgot Your Passcode?</h3>

                {showForm && <div className={"formContainer"}>
                    <p>Fill out this form and we'll send your passcode to the email address we have on file.</p>
                    <div className={"topRecContainer"}>
                        <h4>First Name:</h4>
                        <input id="code" type="text" maxLength={20} value={name.firstName}
                               onInput={event => OnFirstInputChange(event.target.value)} autoFocus={true}/>
                    </div>

                    <div className={"bottomRecContainer"}>
                        <h4>Last Name:</h4>
                        <input id="code" type="text" maxLength={20} value={name.lastName}
                               onInput={event => OnLastInputChange(event.target.value)} autoFocus={true}/>
                    </div>
                    <button className={"submitButton"} onClick={async () => {onSubmit(name)}}>Submit</button>
                </div>}

                {showSuccess && <div className={"successContainer"}>
                    <h4>Email sent!</h4>
                    <h4>Didn't receive the email? Make sure to check your spam folder.</h4>
                    <h4>If you don't receive the email after 10 minutes, reach out to Ben or Deven.</h4>
                </div>}

                {showError && <div className={"errorContainer"}>
                    <h4>There was an error trying to fetch your passcode. Try again later!</h4>
                    <h4>If this error persists, reach out to Ben or Deven.</h4>
                </div>}
            </div>
        </div>
    )
}

export default RecoveryPopup;