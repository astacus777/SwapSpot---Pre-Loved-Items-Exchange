import React from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import FourSimpleSteps from "./FourSimpleSteps";
import AboutUs from "./AboutUs"

const Home = () => {
    return (
        <div>
            <HomeHeader />
            <HomeThreeColumns />
            <FourSimpleSteps />
            <AboutUs />
            {/*  inne komponenty*/}
        </div>
    )
}
export default Home;