import React from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import FourSimpleSteps from "./FourSimpleSteps";
import AboutUs from "./AboutUs"
import FundOrgCol from "./FundOrgCol";

const Home = () => {
    return (
        <div>
            <HomeHeader />
            <HomeThreeColumns />
            <FourSimpleSteps />
            <AboutUs />
            <FundOrgCol />
            {/*  inne komponenty*/}
        </div>
    )
}
export default Home;