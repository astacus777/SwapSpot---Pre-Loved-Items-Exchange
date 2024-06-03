import React from "react";
import Home from "./components/Home";
import {
    HashRouter,
    Route,
    Routes
} from 'react-router-dom';
import LoginReg from "./components/LoginReg";
import Register from "./components/Register";

const App = () => {
    return (
            <HashRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/logowanie" element={<LoginReg />} />
                    <Route path="/rejestracja" element={<Register />} />
                </Routes>
            </HashRouter>
    )
}

export default App;