import React from "react";
import '../scss/NavBar.scss';
const TwoButtons = () => {
    return (
        <div className="big-button-container">
            <button className="big-button">Oddaj rzeczy</button>
            <button className="big-button">Zorganizuj zbiórkę</button>
        </div>
    )
}
export default TwoButtons;