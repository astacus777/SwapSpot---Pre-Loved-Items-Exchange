import React from "react";
import '../scss/NavBar.scss';
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
    return (
        <div className="main-nav-container">
            <div className="top-nav-container">
                <RouterLink to="/logowanie">
                    <button>Zaloguj</button>
                </RouterLink>
                <RouterLink to="/rejestracja">
                    <button>Zaloz konto</button>
                </RouterLink>
            </div>
            <div className="bottom-nav-container">
                <button>Start</button>
                <button>O co Chodzi?</button>
                <button>O nas</button>
                <button>Fundacja i organizacje</button>
                <button>Kontakt</button>
            </div>
        </div>
    )

}
export default NavBar;