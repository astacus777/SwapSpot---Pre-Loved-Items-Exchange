import React from "react";
import '../scss/HomeHeader.scss';
import NavBar from "./NavBar";
import imageSrc from    "../assets/Decoration.svg"
import TwoButtons from "./TwoButtons";

const HomeHeader = () => {
    return (
        <div className="header-container">
            <div className="image-container"></div>
            <div className="button-container">
                <div className="home-header-1">
                   <NavBar />
                </div>
                <div className="home-header-11">
                <div className="home-header-2">
                    <p>Zacznij pomagać!</p>
                    <p> Oddaj niechciane rzeczy w zaufane ręce</p>
                </div>
                    <div className="home-header-3">
                        <img src={imageSrc} alt="Description of image" />
                    </div>
                    <div className="home-header-4">
                        <TwoButtons />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader;