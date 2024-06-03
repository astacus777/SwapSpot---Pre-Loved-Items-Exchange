import React, {useState} from "react";
import '../scss/LoginReg.scss';
import NavBar from "./NavBar";
import imageSrc from "../assets/Decoration.svg";

const LoginReg = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })

    const handleClick = (e) => {
        e.preventDefault();
        const validationErrors = validate(user);
        if (Object.keys(validationErrors).length === 0) {
            console.log("Usalo sie");
        } else {
            setErrors(validationErrors);
        }
    }

    const validate = (data) => {
        const errors = {};

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(data.email)) {
            errors.email = "Podany email jest nieprawidłowy";
        }

        if (data.password.length < 6) {
            errors.password = "Podane hasło jest za krótkie";
        }

        return errors;
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser(prevStatus => {
            return {
                ...prevStatus,
                [name]: value
            }
        })
        console.log(user)
    }

    return (
        <div className="login-main-container">
            <div className="nav-bar-container">
                <NavBar/>
            </div>
            <div className="login-container">
                <div className="header-log-container">
                    <p className="header-login">Zaloguj się</p>
                    <img src={imageSrc} alt="Decoration"/>
                </div>
                <form action="" className="insert-details" >
                    <div className="insert-fields">
                    <div>
                        <p className="login-label">Email</p>
                        <input className="input-login" type="email" name="email" value={user.email} onChange={handleChange}/>
                        <div>{errors.email && <p className="error-message">{errors.email}</p>}</div>
                    </div>
                    <div>
                        <p className="login-label">Hasło</p>
                        <input className="input-login" type="password" name="password" value={user.password} onChange={handleChange}/>
                        {errors.password && <p className="error-message">{errors.password}</p>}
                    </div>
            </div>
                    <div className="login-container-btn">
                        <button className="login-btn">Załóż konto</button>
                        <button className="login-btn" type="submit" onClick={handleClick}>Zaloguj się</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
export default LoginReg;