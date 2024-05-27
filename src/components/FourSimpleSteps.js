import React from "react";
import imageSrc from "../assets/Decoration.svg";
import icon1 from "../assets/Icon-1.svg"
import icon2 from "../assets/Icon-2.svg"
import icon3 from "../assets/Icon-3.svg"
import icon4 from "../assets/Icon-4.svg"
import '../scss/FourSimpleSteps.scss';
import { Link as RouterLink } from "react-router-dom";

const FourSimpleSteps = () => {
    return (
        <div className="simple-steps-container" id="how-it-works">
            <div className="steps-header-container">
                <p className="steps-header">Wystarczą 4 proste kroki</p>
                <img className="decoration-img" src={imageSrc} alt="decoration" />
            </div>
            <div className="four-steps-container">
                <div className="card-container">
                    <img className="four-steps-img" src={icon1} alt=""/>
                    <p>Wybierz rzeczy</p>
                    <p className="paragraph-underline"></p>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="card-container">
                    <img className="four-steps-img" src={icon2} alt=""/>
                    <p>Spakuj je</p>
                    <p className="paragraph-underline"></p>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div className="card-container">
                    <img className="four-steps-img" src={icon3} alt=""/>
                    <p>Zdecyduj komu chcesz pomóc</p>
                    <p className="paragraph-underline"></p>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div className="card-container">
                    <img className="four-steps-img" src={icon4} alt=""/>
                    <p>Zamów kuriera</p>
                    <p className="paragraph-underline"></p>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <div className="steps-button-container">
                <RouterLink to="/logowanie">
                <button className="steps-btn">ODDAJ RZECZY</button>
                </RouterLink>
            </div>

        </div>
    )
}
export default FourSimpleSteps;