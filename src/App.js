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

const App = () => {
    return (
            <HashRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                </Routes>
            </HashRouter>
    )
}

export default App;