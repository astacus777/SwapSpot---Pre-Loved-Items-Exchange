import React, {useState} from "react";
import "../scss/ContactUs.scss";
import imageSrc from "../assets/Decoration.svg";
import instaIcon from "../assets/Instagram.svg";
import faceIcon from "../assets/Facebook.svg";
import { API_URL} from "../api/constants";

const ContactUs = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [errors, setErrors] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validate(user);
        if (Object.keys(validationErrors).length === 0) {
            try {
                const response = await fetch(`${API_URL}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(user)
                });
                const data = await response.json();
                if (response.status === 200 && data.status === "success") {
                    setUser({
                        name: "",
                        email: "",
                        message: ""
                    });

                    setSuccessMessage("Wiadomość została wysłana! Wkrótce się skontaktujemy.");
                    setErrors({});

                } else if (response.status === 400) {
                    setErrors(data.errors );
                    setSuccessMessage("");
                }
            } catch (error) {
                console.error("Error submitting form:", error);
            }
        } else {
            setErrors(validationErrors);
            setSuccessMessage("");
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
        console.log(user)
    }

    const validate = (values) => {
        const errors = {};
        if (!values.name.trim()) {
            errors.name = "Imię jest wymagane";
        } else if (values.name.trim().split(" ").length > 1) {
            errors.name = "Imię powinno być jednym wyrazem";
        }
        if (!values.email.trim()) {
            errors.email = "Email jest wymagany";
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = "Podany email jest niepoprawny";
        }
        if (!values.message.trim()) {
            errors.message = "Wiadomość jest wymagana";
        } else if (values.message.trim().length < 120) {
            errors.message = "Wiadomość musi mieć conajmniej 120 znaków";
        }
        return errors;
    };



    return (
        <div>

            <div className="contact-us-container" id="contact-us">
                <div className="contact-us-form">

                    <p className="contact-us-header">Skontaktuj się z nami</p>
                    <img className="decoration-img" src={imageSrc} alt="decoration"/>
                    {successMessage && <p className="success-message">{successMessage}</p>}
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="contact-us-name">
                                <div className="contact-us-name-column">
                                    <label htmlFor="">Wpisz swoje imię</label>
                                    <input className="contact-us-input" type="text" placeholder="Krzysztof" name="name" value={user.name} onChange={handleChange}/>
                                    {errors.name && <span className="error-msg">{errors.name}</span>}
                                </div>
                                <div className="contact-us-name-column">
                                    <label htmlFor="">Wpisz swój email</label>
                                    <input className="contact-us-input" type="text" placeholder="abc@xyz.pl" name="email" value={user.email} onChange={handleChange}/>
                                    {errors.email && <span className="error-msg">{errors.email}</span>}
                                </div>
                            </div>
                            <div className="contact-us-name-column">
                                <label htmlFor="">Wpisz swoją wiadomość</label>
                                <textarea className="contact-us-input contact-us-textarea"  name="message" value={user.message} onChange={handleChange}
                                          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                                {errors.message && <span className="error-msg">{errors.message}</span>}
                            </div>
                            <div className="contact-us-btn-container">
                                <button className="contact-us-btn">Wyślij</button>
                            </div>
                        </form>
                    </div>
                </div>


                <div className="contact-us-footer">
                    <div></div>
                    <div className="contact-us-copy">
                        <p>Copyright by Coders Lab</p>
                    </div>
                    <div className="social-icons">
                        <img className="social-decoration-img" src={faceIcon} alt="decoration"/>
                        <img className="social-decoration-img" src={instaIcon} alt="decoration"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactUs;