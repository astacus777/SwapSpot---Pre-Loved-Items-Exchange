import React from "react";
import '../scss/LoginReg.scss';
import NavBar from "./NavBar";
import imageSrc from "../assets/Decoration.svg";

const LoginReg = () => {

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
                <form action="" className="insert-details">
                    <div className="insert-fields">
                    <div>
                        <p className="login-label">Email</p>
                        <input className="input-login" type="text"/>
                    </div>
                    <div>
                        <p className="login-label">Hasło</p>
                        <input className="input-login" type="text"/>
                    </div>
            </div>
                    <div className="login-container-btn">
                        <button className="login-btn">Załóż konto</button>
                        <button className="login-btn">Zaloguj się</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
export default LoginReg;