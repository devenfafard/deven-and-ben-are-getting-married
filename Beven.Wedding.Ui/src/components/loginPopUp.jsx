import "./loginPopUp.css";

const LoginPopUp = ({showPopup, closePopup, onSubmit}) =>
{
    if(!showPopup) {return null}
    return (
        <div className="loginPopUp">
            <button className="closeButton" onClick={closePopup}/>
            <div className="loginContainer">
                <label>
                    beeblebobble<input/>
                    <button onClick={onSubmit}>Submit</button>
                </label>
            </div>
        </div>
    )
}

export default LoginPopUp;