import React from "react";
import '../scss/ContactUs.scss'
import imageSrc from "../assets/Decoration.svg";
import instaIcon from "../assets/Instagram.svg";
import faceIcon from "../assets/Facebook.svg"
const ContactUs = () => {
    return (
        <div >
            <div className="contact-us-container" id="contact-us">
            <div className="contact-us-form">

                    <p className="contact-us-header">Skontaktuj się z nami</p>
                    <img className="decoration-img" src={imageSrc} alt="decoration" />
                <div>
                    <div className="contact-us-name">
                        <div className="contact-us-name-column">
                            <label htmlFor="">Wpisz swoje imię</label>
                            <input className="contact-us-input" type="text" placeholder="Krzysztof"/>
                        </div>
                        <div className="contact-us-name-column">
                            <label htmlFor="">Wpisz swój email</label>
                            <input className="contact-us-input" type="text" placeholder="abc@xyz.pl"/>
                        </div>
                    </div>
                    <div className="contact-us-name-column">
                        <label htmlFor="">Wpisz swoją wiadomość</label>
                        <textarea  className="contact-us-input contact-us-textarea" type="textarea" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                    </div>
                    <div className="contact-us-btn-container">
                    <button className="contact-us-btn">Wyślij</button>
                    </div>

                </div>

            </div>

                <div className="contact-us-footer">
                    <div></div>
                    <div className="contact-us-copy">
                    <p>Copyright by Coders Lab</p>
                    </div>
                    <div className="social-icons">
                    <img className="social-decoration-img" src={faceIcon} alt="decoration" />
                    <img className="social-decoration-img" src={instaIcon} alt="decoration" />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default ContactUs;