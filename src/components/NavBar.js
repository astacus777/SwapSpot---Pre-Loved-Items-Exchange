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
                <ScrollLink to="start" smooth={true} duration={500}>
                   <button>Start</button>
                </ScrollLink>
                <ScrollLink to="what-we-do" smooth={true} duration={500}>
                  <button>O co Chodzi?</button>
                </ScrollLink>
                <ScrollLink to="about-us" smooth={true} duration={500}>
                  <button>O nas</button>
                </ScrollLink>
                <ScrollLink to="organisation" smooth={true} duration={500}>
                  <button>Fundacja i organizacje</button>
                </ScrollLink>
                <ScrollLink to="contact" smooth={true} duration={500}>
                  <button>Kontakt</button>
                </ScrollLink>
            </div>
        </div>
    )

}
export default NavBar;