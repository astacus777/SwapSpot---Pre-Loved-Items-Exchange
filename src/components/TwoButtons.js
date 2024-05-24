import React from "react";
import '../scss/NavBar.scss';
import { Link as RouterLink } from "react-router-dom";
const TwoButtons = () => {
    return (
        <div className="big-button-container">
            <RouterLink to="/logowanie">
            <button className="big-button">Oddaj rzeczy</button>
            </RouterLink>

                <RouterLink to="/logowanie">
            <button className="big-button">Zorganizuj zbiórkę</button>
                </RouterLink>
        </div>
    )
}
export default TwoButtons;