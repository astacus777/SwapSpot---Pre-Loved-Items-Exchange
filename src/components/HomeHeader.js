import React from "react";
import '../scss/HomeHeader.scss';
import NavBar from "./NavBar";
import imageSrc from    "../assets/Decoration.svg"

const HomeHeader = () => {
    return (
        <div className="header-container">
               <div className="image-container">
               </div>
            <div className="button-container">
                <div>
                <NavBar />
                <div>
                    <h2>Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</h2>
                </div>
                    <div>
                        <img src={imageSrc} alt="Description of image" />
                    </div>
            </div>
            </div>
        </div>
    )
}

export default HomeHeader;