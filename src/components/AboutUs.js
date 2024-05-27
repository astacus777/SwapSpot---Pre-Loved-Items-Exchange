import React from "react";
import '../scss/AboutUs.scss';
import imageSrc from "../assets/Decoration.svg";
import imageSig from "../assets/Signature.svg";

const AboutUs = () => {
    return (
        <div className="about-steps-container" id="about-us">
            <div className="about-text-container">
                <p>O nas</p>
                <img className="decoration-img" src={imageSrc} alt="decoration" />
                <div className="text-container">
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                </div>
                    <div className="signature-container">
                <img className="signature-img" src={imageSig} alt="Signature" />
                </div>
            </div>
            <div className="about-img-container"></div>
        </div>
    )
}
export default AboutUs;