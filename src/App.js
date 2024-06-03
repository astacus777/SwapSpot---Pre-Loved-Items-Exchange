import React from "react";
import Home from "./components/Home";
import {
    HashRouter,
    Route,
    Routes,
    Link,
    NavLink,
    Outlet
} from 'react-router-dom';
import LoginReg from "./components/LoginReg";

const App = () => {
    return (
            <HashRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/logowanie" element={<LoginReg />} />
                </Routes>
            </HashRouter>
    )
}

export default App;